<template>
  <div id="app">
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="易班账号">
        <el-input v-model="form.nickName"></el-input>
      </el-form-item>
      <el-form-item label="易班密码">
        <el-input type="password" v-model="form.passwd"></el-input>
      </el-form-item>
      <el-form-item label="当前所在位置">
        <el-input v-model="form.location.value"></el-input>
      </el-form-item>
      <el-form-item label="当前是否在校">
        <el-input v-model="form.isAtHome.value"></el-input>
      </el-form-item>
      <el-form-item label="今日是否有出校">
        <el-input v-model="form.isOut.value"></el-input>
      </el-form-item>
      <el-form-item label="当前体温">
        <el-input v-model="form.wendu_range.value"></el-input>
      </el-form-item>
      <el-form-item label="当前具体体温">
        <el-input v-model="form.wendu.value"></el-input>
      </el-form-item>
      <el-form-item label="今日身体状况">
        <el-input v-model="form.status.value"></el-input>
      </el-form-item>
      <el-form-item label="目前状态">
        <el-input v-model="form.current_status.value"></el-input>
      </el-form-item>
      <el-form-item label="核酸检测结果">
        <el-input v-model="form.test.value"></el-input>
      </el-form-item>
      <el-form-item label="今日是否接触疑似确诊病例">
        <el-input v-model="form.isTouch.value"></el-input>
      </el-form-item>
      <el-form-item label="今日是否接触入境人员">
        <el-input v-model="form.isTouchF.value"></el-input>
      </el-form-item>
      <el-form-item label="今日是否在境外">
        <el-input v-model="form.isAtF.value"></el-input>
      </el-form-item>
      <el-form-item label="今日在境外的国家或地区">
        <el-input v-model="form.place.value"></el-input>
      </el-form-item>
      <el-form-item label="今日是否入境">
        <el-input v-model="form.isIn.value"></el-input>
      </el-form-item>
      <el-form-item label="今日生活轨迹">
        <el-input v-model="form.toDay.value"></el-input>
      </el-form-item>
      <el-form-item label="外出轨迹">
        <el-input v-model="form.where.value"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FormsAfternoon",
  props: ["id"],
  data() {
    return {
      form: {
        location: {
          id: "1e9110fd40c54ab9c4aaf6f2a723948e",
          value: "福建省/福州市/仓山区",
        },
        isAtHome: {
          id: "d8cfdd2a7ffbf61af92afc9a018f2d27",
          value: "否",
        },
        isOut: {
          id: "74bbf12c342ac7bbb760908a1a9e3571",
          value: "否",
        },
        wendu_range: {
          id: "9cd65a003f4a2c30a4d949cad83eda0d",
          value: "37.3度以下",
        },
        wendu: {
          id: "51279a11e2aee2add8cad9e85ffa50ea",
          value: "36.6°C",
        },
        status: {
          id: "65ff68aeda65f345fef50b8b314184a7",
          value: ["无不适"],
        },
        current_status: {
          id: "3ca06a2adae4f7fd5f6774252245de8a",
          value: "非以上状态",
        },
        test: {
          id: "8984d8de171af353e0b6f884461ca5e3",
          value: "未检测",
        },
        isTouch: {
          id: "15e99f02f8e40f0dd452baf8defc85a1",
          value: "否",
        },
        isTouchF: {
          id: "8bb03c6581952afa85f80269c75169b4",
          value: "否",
        },
        isAtF: {
          id: "d64cbfdb4f176035fb615772d693856b",
          value: "否",
        },
        place: {
          id: "d314137ca1fe415b37a5ff86ad02340c",
          value: null,
        },
        isIn: {
          id: "31192d42bda88a196f156ad55b271fbb",
          value: "否",
        },
        toDay: {
          id: "c4b48d92f1a086996b0b2dd5f853c9f7",
          value: "在家，未外出",
        },
        where: {
          id: "0d0bb7b021aafc67cf8053462539eba5",
          value: null,
        },
        remark: {
          id: "6c4ed7eacfeb41a2e67d7019d7c0faff",
          value: null,
        },
        nickName: "",
        passwd: "",
      },
    };
  },
  created() {
    const cacheForm = localStorage.getItem("formAfternoon");
    if (cacheForm) {
      this.form = JSON.parse(cacheForm);
    }
  },
  methods: {
    async onSubmit() {
      const submit = {
        [this.form.location.id]: this.form.location.value,
        [this.form.isAtHome.id]: this.form.isAtHome.value,
        [this.form.isOut.id]: this.form.isOut.value,
        [this.form.wendu_range.id]: this.form.wendu_range.value,
        [this.form.wendu.id]: this.form.wendu.value,
        [this.form.status.id]: this.form.status.value,
        [this.form.current_status.id]: this.form.current_status.value,
        [this.form.test.id]: this.form.test.value,
        [this.form.isTouch.id]: this.form.isTouch.value,
        [this.form.isTouchF.id]: this.form.isTouchF.value,
        [this.form.isAtF.id]: this.form.isAtF.value,
        [this.form.place.id]: this.form.place.value,
        [this.form.isIn.id]: this.form.isIn.value,
        [this.form.toDay.id]: this.form.toDay.value,
        [this.form.where.id]: this.form.where.value,
        [this.form.remark.id]: this.form.remark.value,
      };
      console.log(JSON.stringify(submit));
      localStorage.setItem("formAfternoon", JSON.stringify(this.form));

      let data = {
        form: JSON.stringify(submit),
        name: this.form.nickName,
        passwd: this.form.passwd,
      };
      const res = await this.$http.post("/formPost", data);
      if (res.data.code === 500) {
        alert(res.data.msg);
      } else {
        alert(res.data.msg);
      }
    },
  },
};
</script>

<style></style>
