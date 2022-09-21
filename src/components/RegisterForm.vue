<template>
  <div class="login-box">
    <div class="login-box-top-area">
      <div class="login-row">
        <span class="login-text">注册</span>
      </div>
      <p class="form-title">
        已有账户？
        <a @click="loginPag">直接登录</a>
      </p>
    </div>
    <div class="login-form">
      <el-form
        ref="ruleForm"
        :model="ruleFormUser"
        class="demo-ruleForm"
        :rules="rules"
      >
        <div id="form-it">
          <el-form-item label="ID" hidden prop="userid">
            <el-input v-model="ruleFormUser.userid"></el-input>
          </el-form-item>

          <el-form-item label="姓名" prop="username">
            <el-input
              v-model="ruleFormUser.username"
              placeholder="请输入您的姓名"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item label="电话" prop="tel">
            <el-input
              v-model="ruleFormUser.tel"
              placeholder="请输入您的联系电话"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="ruleFormUser.email"
              placeholder="请输入您的邮箱地址"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item label="身份" prop="userID">
            <el-select v-model="ruleFormUser.userID" placeholder="请选择">
              <el-option
                v-for="item in optionsWhat"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="院系/部门名称" prop="faculty">
            <el-input
              v-model="ruleFormUser.faculty"
              placeholder="请输入您的院系/部门"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item label="项目名称" prop="projectName">
            <el-select
              v-model="ruleFormUser.projectName"
              filterable
              placeholder="请选择"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in optionsProjectNameList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="空间" prop="area">
            <el-select
              v-model="ruleFormUser.area"
              filterable
              placeholder="请选择"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in optionsSpaceList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="楼宇" prop="building">
            <el-select
              v-model="ruleFormUser.building"
              filterable
              placeholder="请选择"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in optionsBuildingList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="房间号" id="room-sp" prop="num">
            <el-input
              v-model="ruleFormUser.num"
              placeholder="请输入房间号"
              clearable
            ></el-input>
          </el-form-item>
        </div>
        <!-- --------- -->
        <el-form-item class="form-items" id="sp-button">
          <div class="box-form-out">
            <div class="box-form-out-in-box">
              <div class="box-form-out-inner">
                <el-button class="btn" @click="submitForm('ruleForm')">
                  <span>提交</span>
                </el-button>
                <el-button
                  class="btn2"
                  style="background: #fff; border: 1px solid rgb(237, 152, 76)"
                  @click="resetForm('ruleForm')"
                >
                  <span style="color: rgb(237, 152, 76)">重置</span>
                </el-button>
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="login-box-bottom-area"></div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { setCookie, cutString } from "../utils";
export default {
  components: {},
  data() {
    return {
      ruleFormUser: {
        // userid
        userid: "",
        // 邮箱
        email: "qingflow@qq.com",
        // 姓名
        username: "april",
        // 电话
        tel: "15539234100",
        // 身份
        userID: "学生",
        // 院系/部门
        faculty: "工学院",
        //项目名称
        projectName: "",
        //空间
        area: "",
        // 楼宇
        building: "",
        //房间号
        num: "2233",
      },
      // 表单的验证规则
      rules: {
        // userid
        userid: [{ required: true, message: "请输入您ID", trigger: "blur" }],
        // email
        email: [
          { required: true, message: "请输入您邮箱", trigger: "blur" },
          {
            pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: "请输入正确的邮箱地址",
            trigger: "blur",
          },
        ],
        // username
        username: [
          { required: true, message: "请输入您的名称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        // tel
        tel: [
          { required: true, message: "请输入您的电话", trigger: "blur" },
          {
            pattern: /^\d{4,11}$/,
            message: "请输入正确的电话",
            trigger: "blur",
          },
        ],
        // userID
        userID: [
          {
            required: true,
            message: "请选择您的身份",
            trigger: "change",
          },
        ],
        // faculty
        faculty: [
          {
            required: true,
            message: "请输入您的院系/部门名称",
            trigger: "blur",
          },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        // projectName
        projectName: [
          {
            required: true,
            message: "请选择您的项目名称",
            trigger: "change",
          },
        ],
        // area
        area: [
          {
            message: "请输入您的院系/部门名称",
            trigger: "blur",
          },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        // building
        building: [
          {
            message: "请输入您的空间",
            trigger: "blur",
          },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        // num
        num: [
          {
            message: "请输入您的房间号",
            trigger: "blur",
          },
          {
            min: 1,
            max: 5,
            message: "长度在 1 到 5 个字符",
            trigger: "blur",
          },
        ],
      },
      // 控制密码的显示和隐藏
      pwdType: "password",
      // 下拉数据1
      optionsProjectNameList: [],
      // 下拉数据2
      optionsSpaceList: [],
      // 下拉数据3
      optionsBuildingList: [],

      // 职位三种
      optionsWhat: [
        {
          value: "学生",
          label: "学生",
        },
        {
          value: "教师",
          label: "教师",
        },
        {
          value: "职工",
          label: "职工",
        },
      ],
    };
  },
  computed: {},
  methods: {
    loginPag() {
      this.$router.push("/login");
    },
    // 表单验证提交
    submitForm(formName) {
      // 生成id
      this.buildID();
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");

          // 整理最后的数据准备提交
          let submitUserData = {
            userid: this.ruleFormUser.userid,
            email: this.ruleFormUser.email,
            name: this.ruleFormUser.username,
            mobileNum: this.ruleFormUser.tel,
            identity: this.ruleFormUser.userID,
            projectName: this.ruleFormUser.projectName,
            space: this.ruleFormUser.area,
            building: this.ruleFormUser.building,
            room: this.ruleFormUser.num,
          };
          console.log(submitUserData);
          // 注册
          this.toRegester(submitUserData);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 表单重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取下拉框的数据----第一次请求
    getSelectProjectNameData() {
      this.$axios.get("/data/projectNameDatas.json").then((res) => {
        console.log(res);
        if (res.status === 200 && res.data.errCode === 0) {
          this.optionsProjectNameList = res.data.result;
        }
      });
    },

    // 获取下拉框的数据----第二次请求
    getSelectProjectNameDataSeconde() {
      // 这里是要传递参数的
      this.$axios.get("/data/threedatas1.json").then((res) => {
        console.log(res);
        if (res.status === 200 && res.data.errCode === 0) {
          this.optionsSpaceList = res.data.result;
        }
      });
    },

    // 获取下拉框的数据----第三次请求
    getSelectProjectNameDataThird() {
      // 这里的请求是要传递参数的
      this.$axios.get("/data/threedatas2.json").then((res) => {
        if (res.status === 200 && res.data.errCode === 0) {
          this.optionsBuildingList = res.data.result;
        }
      });
    },

    // 注册发起请求
    toRegester(data) {
      console.log(data);
      // this.$axios()
      //   .post("/dantian/register", data)
      //   .then((res) => {
      //     console.log(res);
      //   });

      // 注册成功 保存数据
      // eslint-disable-next-line no-constant-condition

      setCookie("USERDATA", JSON.stringify(data), 3);
      // 并跳转到登录页面
      this.$router.push("/login");
    },

    // 生成唯一化id
    buildID() {
      // 前缀字符串
      let preString = "danTian";
      // 手机号
      let str = this.ruleFormUser.tel;
      let lastPhone = cutString(str);
      // 随机id
      let radomId = nanoid();
      // console.log(preString, lastPhone, radomId);
      this.ruleFormUser.userid = `${preString}-${lastPhone}-${radomId}`;
    },
  },
  created() {
    this.getSelectProjectNameData();
  },
  mounted() {},
  watch: {
    "ruleFormUser.projectName": {
      handler(newval, oldval) {
        console.log("projectName:::", newval, oldval);
        if (newval.projectName !== "") {
          // 传递参数
          this.getSelectProjectNameDataSeconde();
        }
      },
    },
    "ruleFormUser.area": {
      handler(newval, oldval) {
        console.log("area:::", newval, oldval);
        if (newval.area !== "") {
          // 这里需要进行传参
          this.getSelectProjectNameDataThird();
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) and (max-width: 1920px) {
  .login-box {
    position: relative;
    width: 336px;
    // 这里的高度应该是要被撑起来的
    .login-box-top-area {
      padding-bottom: 32px;
      .login-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .login-text {
          font-size: 32px;
          font-weight: 600;
          line-height: 40px;
          color: #121315;
        }
      }
      .form-title {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: #767e89;

        a {
          color: #fb9337;
          text-decoration: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          transition: color 0.3s;
          &:hover {
            color: #ffa459;
          }
        }
      }
    }

    .form-items {
      box-sizing: border-box;
      margin: 0 0 10px;
      padding: 0;
      color: #000000d9;
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1;
      list-style: none;
      font-feature-settings: "tnum", "tnum";
      vertical-align: top;

      .box-form-out {
        width: 100%;
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 100%;
        min-height: 1px;
        box-sizing: border-box;
        .box-form-out-in-box {
          box-sizing: border-box;

          .box-form-out-inner {
            box-sizing: border-box;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            .btn {
              border: 1px solid transparent;
              cursor: pointer;
              padding: 14px 16px;
              height: 44px;
              width: 70%;
              background: var(--brand-primary-base, #fb9337);
              position: relative;
              display: inline-flex;
              align-items: center;
              color: #fff;
              justify-content: center;
              transition: all 0.1s ease-in-out;
              border-radius: 4px;
              &:hover {
                background: var(--brand-primary-50, #ffa459);
              }
              span {
                font-size: 16px;
                font-weight: 600;
                line-height: 16px;
              }
            }
            .btn2 {
              border: 1px solid transparent;
              cursor: pointer;
              padding: 14px 16px;
              height: 44px;
              width: 20%;
              background: var(--brand-primary-base, #fb9337);
              position: relative;
              display: inline-flex;
              align-items: center;
              color: #fff;
              justify-content: center;
              transition: all 0.1s ease-in-out;
              border-radius: 4px;
              &:hover {
                background: var(--brand-primary-50, #ffa459);
              }
              span {
                font-size: 16px;
                font-weight: 600;
                line-height: 16px;
              }
            }
            .forget-pwd {
              margin-top: 16px;
              text-align: end;
              a {
                background: transparent;
                text-decoration: none;
                outline: none;
                cursor: pointer;
                color: #fb9337;
                transition: color 0.3s;
                &:hover {
                  color: #ffa459;
                }
              }
            }
          }
        }
      }
    }

    #sp-button {
      width: 336px;
      margin: 0px;
      padding: 0px;
      position: fixed;
      bottom: 6%;
    }
    #form-it {
      height: 65vh;
      overflow: scroll;
      padding-right: 12px;
    }
    #room-sp {
      margin-bottom: 80px;
    }
  }
}
@media screen and (min-width: 150px) and (max-width: 768px) {
  .login-box {
    position: relative;
    width: 100%;
    // 这里的高度应该是要被撑起来的
    .login-box-top-area {
      padding-bottom: 32px;
      .login-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .login-text {
          font-size: 32px;
          font-weight: 600;
          line-height: 40px;
          color: #121315;
        }
      }
      .form-title {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: #767e89;

        a {
          color: #fb9337;
          text-decoration: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          transition: color 0.3s;
        }
      }
    }
  }
  .form-items {
    box-sizing: border-box;
    margin: 0 0 16px;
    padding: 0;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1;
    list-style: none;
    font-feature-settings: "tnum", "tnum";
    vertical-align: top;
    .box-form-out {
      width: 100%;
      flex: 1 1 0;
      min-width: 0;
      display: flex;
      flex-direction: column;
      position: relative;
      max-width: 100%;
      min-height: 1px;
      box-sizing: border-box;
      .box-form-out-in-box {
        box-sizing: border-box;
        .box-form-out-inner {
          box-sizing: border-box;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          .btn {
            border: 1px solid transparent;
            cursor: pointer;
            padding: 14px 16px;
            height: 44px;
            width: 70%;
            background: var(--brand-primary-base, #fb9337);
            position: relative;
            display: inline-flex;
            align-items: center;
            color: #fff;
            justify-content: center;
            transition: all 0.1s ease-in-out;
            border-radius: 4px;
            &:hover {
              background: var(--brand-primary-50, #ffa459);
            }
            span {
              font-size: 16px;
              font-weight: 600;
              line-height: 16px;
            }
          }
          .btn2 {
            border: 1px solid transparent;
            cursor: pointer;
            padding: 14px 16px;
            height: 44px;
            width: 20%;
            background: var(--brand-primary-base, #fb9337);
            position: relative;
            display: inline-flex;
            align-items: center;
            color: #fff;
            justify-content: center;
            transition: all 0.1s ease-in-out;
            border-radius: 4px;
            &:hover {
              background: var(--brand-primary-50, #ffa459);
            }
            span {
              font-size: 16px;
              font-weight: 600;
              line-height: 16px;
            }
          }
          .forget-pwd {
            margin-top: 16px;
            text-align: end;
            a {
              background: transparent;
              text-decoration: none;
              outline: none;
              cursor: pointer;
              color: #fb9337;
              transition: color 0.3s;
              &:hover {
                color: #ffa459;
              }
            }
          }
        }
      }
    }
  }
  #sp-button {
    width: 85%;
    margin: 0px;
    padding: 0px;
    position: fixed;
    bottom: 4%;
    left: 7.5%;
  }
  #form-it {
    height: 65vh;
    overflow: scroll;
    padding-right: 12px;
  }
  #room-sp {
    margin-bottom: 80px;
  }
}
::v-deep .el-form-item {
  margin-bottom: 10px;
}
::v-deep .el-select {
  display: block;
}
// ------
::v-deep .el-input__icon {
  height: 100%;
}
::v-deep .el-select .el-input__icon {
  height: 150%;
}
::v-deep .hover {
  background: #fdbc87;
}
// -----
::v-deep .selected {
  color: #fb9337;
}
::v-deep .el-select .el-input.is-focus .el-input__inner {
  border-color: #fb9337;
}
</style>
