<template>
  <div id="app">

    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="易班账号">
        <el-input v-model="form.nickName"></el-input>
      </el-form-item>
      <el-form-item label="易班密码">
        <el-input type="password" v-model="form.passwd"></el-input>
      </el-form-item>
      <el-form-item label="宿舍楼栋以及宿舍号">
        <el-input v-model="form.name.value"></el-input>
      </el-form-item>
      <el-form-item label="今日体温情况">
        <el-input v-model="form.wendu_range.value"></el-input>
      </el-form-item>
      <el-form-item label="今日早晨具体体温">
        <el-input v-model="form.wendu1.value"></el-input>
      </el-form-item>
      <el-form-item label="今日中午具体体温">
        <el-input v-model="form.wendu2.value"></el-input>
      </el-form-item>
      <el-form-item label="今日身体状况">
        <el-input v-model="form.body.value"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button type="success" @click="$router.push('/')">返回主页</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FormsMorning",
  data() {
    return {
      form: {
        name: {
          id: "8c2f06714b4a3f9366a7c44805f59433",
          value: "",
        },
        wendu_range: {
          id: "2f004b576379388b420af91a830b289a",
          value: "＜37.3℃",
        },
        wendu1: {
          id: "dcd14a8c650432fe60ade625d079d019",
          value: "36.5°C",
        },
        wendu2: {
          id: "872d3a9ecc509bd8181b5342fb38e271",
          value: "36.7°C",
        },
        body: {
          id: "7385e547b89db3b5c6cbf091b29371a4",
          value: "无不适症状",
        },
        remark: {
          id: "bc090a528eec274eb1912b08722d0721",
          value: "",
        },
        nickName: "",
        passwd: "",
      },
    };
  },
  created() {
    const cacheForm = localStorage.getItem("formMorning");
    if (cacheForm) {
      this.form = JSON.parse(cacheForm);
    }
  },
  methods: {
    async onSubmit() {
      const submit = {
        [this.form.name.id]: this.form.name.value,
        [this.form.wendu_range.id]: this.form.wendu_range.value,
        [this.form.wendu1.id]: this.form.wendu1.value,
        [this.form.wendu2.id]: this.form.wendu2.value,
        [this.form.body.id]: this.form.body.value,
        [this.form.remark.id]: this.form.remark.value,
      };
      console.log(JSON.stringify(submit));
      localStorage.setItem("formMorning", JSON.stringify(this.form));
      let data = {
        form: JSON.stringify(submit),
        name: this.form.nickName,
        passwd: this.form.passwd,
      };
      const res = await this.$http.post("/formPost", data);
      if(res.data.code===500){
        alert(res.data.msg)
      }else{
        alert(res.data.msg)
      }
    },
  },
};
</script>

<style></style>
