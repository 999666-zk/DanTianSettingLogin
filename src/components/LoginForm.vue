<template>
  <div class="login-box">
    <div class="login-box-top-area">
      <div class="login-row">
        <span class="login-text">登录</span>
      </div>
      <p class="form-title">
        没有账户？
        <a @click="registerPag">免费注册</a>
      </p>
    </div>
    <div class="login-form">
      <el-form
        ref="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        :model="ruleFormData"
      >
        <el-form-item class="form-items" prop="username">
          <el-input clearable v-model="ruleFormData.username"></el-input>
        </el-form-item>
        <!-- -------------- -->
        <el-form-item class="form-items" prop="password">
          <el-input
            v-model="ruleFormData.password"
            :type="pwdType"
            autocomplete="new-password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <i slot="suffix" class="el-icon-view" @click="showPwd"></i>
          </el-input>
        </el-form-item>
        <!-- --------- -->
        <el-form-item class="form-items">
          <div class="box-form-out">
            <div class="box-form-out-in-box">
              <div class="box-form-out-inner">
                <el-button class="btn" @click="submitForm('ruleForm')"
                  ><span>登录</span></el-button
                >
                <div class="forget-pwd">
                  <a @click="toRepassword">忘记密码</a>
                </div>
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
import JSEncrypt from "jsencrypt";
export default {
  components: {},
  data() {
    return {
      ruleFormData: {
        username: "13162390802",
        password: "Zk410521",
        // username: "",
        // password: "",
      },
      // 控制密码的显示和隐藏
      pwdType: "password",
      rules: {
        username: [
          { required: true, message: "请输入您的手机号", trigger: "blur" },
          {
            pattern: /^\d{4,11}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入您的密码", trigger: "blur" },
        ],
      },

      // 这里的数据可能要被抽离
      pubKey: "",
      EMAIL_REGEX:
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      MOBILENUM_REGEX: /^\d{4,11}$/,
    };
  },
  computed: {},
  methods: {
    showPwd() {
      this.pwdType === "password"
        ? (this.pwdType = "")
        : (this.pwdType = "password");
      let e = document.getElementsByClassName("el-icon-view")[0];
      this.pwdType == ""
        ? e.setAttribute("style", "color: #ed984c")
        : e.setAttribute("style", "color: #c0c4cc");
    },
    registerPag() {
      this.$router.push("/register");
    },
    toRepassword() {
      this.$router.push("/repassword");
    },
    // 获取pubKey
    getPubKey() {
      this.$axios.get("/api/user/pubkey").then((res) => {
        this.pubKey = res.data.pubkey;
      });
    },
    // 进行登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          var encryptor = new JSEncrypt();
          encryptor.setPublicKey(this.pubKey);
          var rsapwd = encryptor.encrypt(this.ruleFormData.password);
          // 只使用手机号进行登录
          let info = {
            email: "",
            areaCode: "86",
            mobile: this.ruleFormData.username,
            password: rsapwd,
          };
          this.$axios
            .post("/api/user/login", JSON.stringify(info))
            .then((res) => {
              if (res.data.token != undefined) {
                var token = res.data.token;
                document.cookie =
                  this.styleData.qflowType +
                  "QflowToken=" +
                  token +
                  ";path=/;domain=." +
                  this.styleData.qflowDomain;
                window.location.href = this.styleData.homeUrl;
              } else {
                if (res.data.statusCode == "41110") {
                  // this.$message.error("账号或密码输入错误");
                  this.$notify.error({
                    title: "提示",
                    message: "账号或密码输入错误",
                    duration: "2000",
                    position: "bottom-left",
                    showClose: true,
                  });
                }
              }
            });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },

    // getCookieData() {},
  },
  created() {
    // this.getCookieData();
    this.getPubKey();
  },
  mounted() {},
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
            .btn {
              border: 1px solid transparent;
              cursor: pointer;
              padding: 14px 16px;
              height: 44px;
              width: 100%;
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
          .btn {
            border: 1px solid transparent;
            cursor: pointer;
            padding: 14px 16px;
            height: 44px;
            width: 100%;
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
}

::v-deep .el-input__inner:hover {
  border-color: #ffb061;
  border-right-width: 1px !important;
  z-index: 1;
}
::v-deep .el-input__inner:focus {
  border-color: #ffb061 !important;
  box-shadow: 0 0 0 2px #fb933733 !important;
  border-right-width: 1px !important;
  outline: 0 !important;
}
::v-deep .el-select .el-input__inner:focus {
  border-color: #ffb061;
  box-shadow: 0 0 0 2px #fb933733;
  border-right-width: 1px;
  outline: 0;
}

::v-deep .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #f5f7fa;
  color: #ffb061;
}

::v-deep .el-select-dropdown__item.selected {
  color: #ffb061 !important;
  font-weight: 700;
}
</style>
