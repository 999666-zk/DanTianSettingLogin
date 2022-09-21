<template>
  <div class="everyDayRate">
    <!-- <a href="#" class="logo-link"
      ><img
        src="https://file.qingflow.com/assets/logoBlack.png?x-oss-process=image/format,webp"
        alt=""
    /></a> -->
    <div class="left-box">
      <video muted autoplay="autoplay" playsinline loop="loop">
        <source
          src="https://file.qingflow.com/assets/passport/passport-76.mp4"
        />
      </video>
    </div>
    <div class="right-box">
      <div class="inner-box">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "LoginPage",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    LoginForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (min-width: 769px) and (max-width: 1920px) {
  .everyDayRate {
    display: flex;
    height: 100%;
    .logo-link {
      position: absolute;
      top: 32px;
      left: 32px;
      z-index: 100;
      cursor: pointer;
      img {
        height: 30px;
      }
    }
    .right-box {
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38%;
      min-width: 600px;
      height: 100%;
      border-radius: 24px 0 0 24px;
      background: #fff;
      .inner-box {
        box-sizing: border-box;
        // .login-box {
        //   position: relative;
        //   width: 336px;
        //   // 这里的高度应该是要被撑起来的
        //   .login-box-top-area {
        //     padding-bottom: 32px;
        //     .login-row {
        //       display: flex;
        //       align-items: center;
        //       justify-content: space-between;
        //       .login-text {
        //         font-size: 32px;
        //         font-weight: 600;
        //         line-height: 40px;
        //         color: #121315;
        //       }
        //     }
        //     .form-title {
        //       margin-top: 8px;
        //       font-size: 14px;
        //       font-weight: 400;
        //       line-height: 22px;
        //       color: #767e89;

        //       a {
        //         color: #fb9337;
        //         text-decoration: none;
        //         background-color: transparent;
        //         outline: none;
        //         cursor: pointer;
        //         transition: color 0.3s;
        //         &:hover {
        //           color: #ffa459;
        //         }
        //       }
        //     }
        //   }

        //   .form-items {
        //     box-sizing: border-box;
        //     margin: 0 0 16px;
        //     padding: 0;
        //     color: #000000d9;
        //     font-size: 14px;
        //     font-variant: tabular-nums;
        //     line-height: 1;
        //     list-style: none;
        //     font-feature-settings: "tnum", "tnum";
        //     vertical-align: top;
        //     .box-form-out {
        //       width: 100%;
        //       flex: 1 1 0;
        //       min-width: 0;
        //       display: flex;
        //       flex-direction: column;
        //       position: relative;
        //       max-width: 100%;
        //       min-height: 1px;
        //       box-sizing: border-box;
        //       .box-form-out-in-box {
        //         box-sizing: border-box;
        //         .box-form-out-inner {
        //           box-sizing: border-box;
        //           .btn {
        //             border: 1px solid transparent;
        //             cursor: pointer;
        //             padding: 14px 16px;
        //             height: 44px;
        //             width: 100%;
        //             background: var(--brand-primary-base, #fb9337);
        //             position: relative;
        //             display: inline-flex;
        //             align-items: center;
        //             color: #fff;
        //             justify-content: center;
        //             transition: all 0.1s ease-in-out;
        //             border-radius: 4px;
        //             &:hover {
        //               background: var(--brand-primary-50, #ffa459);
        //             }
        //             span {
        //               font-size: 16px;
        //               font-weight: 600;
        //               line-height: 16px;
        //             }
        //           }
        //           .forget-pwd {
        //             margin-top: 16px;
        //             text-align: end;
        //             a {
        //               background: transparent;
        //               text-decoration: none;
        //               outline: none;
        //               cursor: pointer;
        //               color: #fb9337;
        //               transition: color 0.3s;
        //               &:hover {
        //                 color: #ffa459;
        //               }
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // }
      }
    }
    .left-box {
      height: 100%;
      flex: 1;
      // background: pink;
      video {
        display: block;
        width: 101%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
@media screen and (min-width: 150px) and (max-width: 768px) {
  .everyDayRate {
    display: flex;
    height: 100%;
    .logo-link {
      position: absolute;
      top: 56px;
      left: 30px;
      z-index: 100;
      cursor: pointer;
      img {
        height: 30px;
      }
    }
    .right-box {
      display: block;
      width: 100%;
      min-width: 0;
      padding: 80px 30px 0;
      border-radius: 0;
      background: #fff;
      .inner-box {
        box-sizing: border-box;
        // .login-box {
        //   position: relative;
        //   width: 100%;
        //   // 这里的高度应该是要被撑起来的
        //   .login-box-top-area {
        //     padding-bottom: 32px;
        //     .login-row {
        //       display: flex;
        //       align-items: center;
        //       justify-content: space-between;
        //       .login-text {
        //         font-size: 32px;
        //         font-weight: 600;
        //         line-height: 40px;
        //         color: #121315;
        //       }
        //     }
        //     .form-title {
        //       margin-top: 8px;
        //       font-size: 14px;
        //       font-weight: 400;
        //       line-height: 22px;
        //       color: #767e89;

        //       a {
        //         color: #fb9337;
        //         text-decoration: none;
        //         background-color: transparent;
        //         outline: none;
        //         cursor: pointer;
        //         transition: color 0.3s;
        //       }
        //     }
        //   }
        // }
        // .form-items {
        //   box-sizing: border-box;
        //   margin: 0 0 16px;
        //   padding: 0;
        //   color: #000000d9;
        //   font-size: 14px;
        //   font-variant: tabular-nums;
        //   line-height: 1;
        //   list-style: none;
        //   font-feature-settings: "tnum", "tnum";
        //   vertical-align: top;
        //   .box-form-out {
        //     width: 100%;
        //     flex: 1 1 0;
        //     min-width: 0;
        //     display: flex;
        //     flex-direction: column;
        //     position: relative;
        //     max-width: 100%;
        //     min-height: 1px;
        //     box-sizing: border-box;
        //     .box-form-out-in-box {
        //       box-sizing: border-box;
        //       .box-form-out-inner {
        //         box-sizing: border-box;
        //         .btn {
        //           border: 1px solid transparent;
        //           cursor: pointer;
        //           padding: 14px 16px;
        //           height: 44px;
        //           width: 100%;
        //           background: var(--brand-primary-base, #fb9337);
        //           position: relative;
        //           display: inline-flex;
        //           align-items: center;
        //           color: #fff;
        //           justify-content: center;
        //           transition: all 0.1s ease-in-out;
        //           border-radius: 4px;
        //           &:hover {
        //             background: var(--brand-primary-50, #ffa459);
        //           }
        //           span {
        //             font-size: 16px;
        //             font-weight: 600;
        //             line-height: 16px;
        //           }
        //         }
        //         .forget-pwd {
        //           margin-top: 16px;
        //           text-align: end;
        //           a {
        //             background: transparent;
        //             text-decoration: none;
        //             outline: none;
        //             cursor: pointer;
        //             color: #fb9337;
        //             transition: color 0.3s;
        //             &:hover {
        //               color: #ffa459;
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // }
      }
    }

    .left-box {
      height: 100%;
      flex: 1;
      // background: pink;
      video {
        display: block;
        width: 101%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
::v-deep .el-input__inner:hover {
  border-color: #ffb061;
  border-right-width: 1px !important;
  z-index: 1;
}
::v-deep .el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #ffb061;
  box-shadow: 0 0 0 2px #fb933733;
  border-right-width: 1px;
  outline: 0;
}
</style>
