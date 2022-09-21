<template>
  <div class="login-box">
    <div class="login-box-top-area">
      <div class="login-row">
        <span class="login-text">重置密码</span>
      </div>
      <p class="form-title">
        重置成功？
        <a @click="toLogin">直接登录</a>
      </p>
    </div>
    <div class="login-form">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item class="form-items" prop="usertag">
          <el-input v-model="ruleForm.usertag"></el-input>
        </el-form-item>

        <!-- <el-form-item class="form-items" prop="yzm">
          <el-input v-model="ruleForm.yzm"></el-input>
          <el-button
            :disabled="isDisabled"
            size="small"
            type="primary"
            @click="getIdentifyCodeBtn"
          >
            {{ isDisabled ? count + "s后获取" : click }}
          </el-button>
        </el-form-item> -->
        <!-- -------------- -->
        <el-form-item class="form-items" autocomplete="off" prop="password">
          <el-input
            v-model="ruleForm.password"
            :type="pwdType1"
            placeholder="请输入密码"
            autocomplete="new-password"
          >
            <i slot="suffix" class="el-icon-view" @click="showPwd1"></i>
          </el-input>
        </el-form-item>

        <el-form-item class="form-items" autocomplete="off" prop="repassword">
          <el-input
            v-model="ruleForm.repassword"
            :type="pwdType2"
            placeholder="请输入密码"
          >
            <i slot="suffix" class="el-icon-view" @click="showPwd2"></i>
          </el-input>
        </el-form-item>
        <!-- --------- -->
        <el-form-item class="form-items">
          <div class="box-form-out">
            <div class="box-form-out-in-box">
              <div class="box-form-out-inner">
                <button class="btn"><span>登录</span></button>
                <div class="forget-pwd">
                  <!-- <a href="#">忘记密码</a> -->
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
export default {
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.repassword !== "") {
          this.$refs.ruleForm.validateField("repassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        usertag: "15539234100",
        yzm: "yyds",
        password: "",
        repassword: "",
      },
      // 控制密码的显示和隐藏
      pwdType1: "password",
      pwdType2: "password",
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    showPwd1() {
      this.pwdType1 === "password"
        ? (this.pwdType1 = "")
        : (this.pwdType1 = "password");
      let e = document.getElementsByClassName("el-icon-view")[0];
      this.pwdType1 == ""
        ? e.setAttribute("style", "color: #ed984c")
        : e.setAttribute("style", "color: #c0c4cc");
    },
    showPwd2() {
      this.pwdType2 === "password"
        ? (this.pwdType2 = "")
        : (this.pwdType2 = "password");
      let e = document.getElementsByClassName("el-icon-view")[1];
      this.pwdType2 == ""
        ? e.setAttribute("style", "color: #ed984c")
        : e.setAttribute("style", "color: #c0c4cc");
    },

    toLogin() {
      this.$router.push("/login");
    },

    // //验证码
    // getIdentifyCodeBtn() {
    //   if (!this.globalPhoneReg.test(this.uphone)) {
    //     this.$message({
    //       showClose: true,
    //       message: "手机号格式不正确",
    //       type: "error",
    //     });
    //     return false;
    //   }
    //   getIdentifyCode({
    //     phoneNumber: this.uphone,
    //     language: this.$store.state.language,
    //   }).then((result) => {
    //     const { code, data } = result;
    //     if (code == 200) {
    //       this.countTime(); //0才需要发送验证码，发送手机短信后倒计时便开启
    //       this.$message({
    //         showClose: true,
    //         message: "短信验证码发送成功",
    //         type: "success",
    //       });
    //     }
    //   });
    // },
    // //倒计时
    // countTime() {
    //   const TIME_COUNT = 60; //倒计时60秒
    //   if (!this.timer) {
    //     this.count = TIME_COUNT;
    //     this.isDisabled = true;
    //     this.timer = setInterval(() => {
    //       if (this.count > 0 && this.count <= TIME_COUNT) {
    //         this.count--;
    //       } else {
    //         this.isDisabled = false;
    //         clearInterval(this.timer);
    //         this.timer = null;
    //       }
    //     }, 1000);
    //   }
    // },
  },
  created() {},
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
