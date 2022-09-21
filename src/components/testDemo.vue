<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="下拉1">
        <el-select
          v-model="selectData.com1"
          placeholder="请选择1"
          clearable
          @change="change1"
        >
          <el-option
            v-for="x in optionData.com1"
            :key="x.value"
            :value="x.value"
            :label="x.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="下拉2">
        <el-select
          v-model="selectData.com2"
          placeholder="请选择2"
          clearable
          @change="change2"
        >
          <el-option
            v-for="x in optionData.com2[selectData.com1]"
            :key="x.value"
            :value="x.value"
            :label="x.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="下拉3">
        <el-select v-model="selectData.com3" placeholder="请选择3" clearable>
          <el-option
            v-for="x in optionData.com3[selectData.com2]"
            :key="x.value"
            :value="x.value"
            :label="x.name"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectData: {
        com1: "",
        com2: "",
        com3: "",
      },
      optionData: {
        com1: [
          { value: "A", name: "控件1A" },
          { value: "B", name: "控件1B" },
          { value: "C", name: "控件1C" },
        ],
        com2: {
          A: [
            { value: "A1", name: "控件2A1" },
            { value: "A2", name: "控件2A2" },
            { value: "A3", name: "控件2A3" },
          ],
          B: [
            { value: "B1", name: "控件2B1" },
            { value: "B2", name: "控件2B2" },
          ],
          C: [
            { value: "C1", name: "控件2C1" },
            { value: "C2", name: "控件2C2" },
          ],
        },
        com3: {
          A1: [
            { value: "A11", name: "控件3A11" },
            { value: "A12", name: "控件3A12" },
          ],
          A2: [
            { value: "A21", name: "控件3A21" },
            { value: "A22", name: "控件3A22" },
          ],
          A3: [
            { value: "A31", name: "控件3A31" },
            { value: "A32", name: "控件3A32" },
            { value: "A33", name: "控件3A33" },
          ],
          B1: [
            { value: "B11", name: "控件3B11" },
            { value: "B12", name: "控件3B12" },
          ],
          B2: [{ value: "B21", name: "控件3B21" }],
          C1: [{ value: "C11", name: "控件3C11" }],
          C2: [
            { value: "C21", name: "控件3C21" },
            { value: "C22", name: "控件3C22" },
            { value: "C23", name: "控件3C23" },
          ],
        },
      },
    };
  },
  computed: {},
  methods: {
    change1: function (val) {
      if (val) {
        this.selectData.com2 = this.optionData.com2[val][0].value; //根据第一个控件所选项确定第二个控件下拉内容的对象数组，并使默认为第一个数组项
        this.change2(); //控件2手动改变时会自动触发该方法，但是被动改变时不会触发，所以手动加上去
      } else {
        this.selectData.com2 = ""; //若前一个控件清空则后一个控件所选内容也清空
        this.change2();
      }
    },
    change2: function () {
      var val = this.selectData.com2;
      if (val) {
        this.selectData.com3 = this.optionData.com3[val][0].value;
      } else {
        this.selectData.com3 = "";
      }
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
