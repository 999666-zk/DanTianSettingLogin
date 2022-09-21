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
        <RePassword />
      </div>
    </div>
  </div>
</template>

<script>
import RePassword from "../components/RePassword.vue";
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
    RePassword,
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
