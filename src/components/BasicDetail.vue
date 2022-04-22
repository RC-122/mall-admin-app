<template>
  <div class="basic-detail">
    <a-form-model
      :model="form"
      ref="ruleForm"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="商品标题" prop="title" required>
        <a-input v-model="form.title" />
      </a-form-model-item>

      <a-form-model-item label="商品描述" prop="desc">
        <a-input v-model="form.desc" type="textarea" />
      </a-form-model-item>

      <a-form-model-item label="商品类目" required prop="category">
        <a-select
          v-model="form.category"
          placeholder="请选择分类"
          @change="changeCategoryItem"
        >
          <a-select-option
            v-for="it in categoryList"
            :key="it.id"
            :value="it.id"
            >{{ it.name }}</a-select-option
          >
        </a-select>

        <a-select v-model="form.c_item" placeholder="请选择子分类">
          <a-select-option v-for="it in categoryItems" :key="it" :value="it">{{
            it
          }}</a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item label="商品标签" prop="tags" required>
        <a-select
          mode="tags"
          :default-value="['包邮，最晚次日达']"
          v-model="form.tags"
        >
          <a-select-option value="包邮，最晚次日达">
            包邮，最晚次日达
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item class="next-btn" :wrapperCol="{span:24}">
        <a-button  type="primary" @click="next"> 下一步 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import { getCategory } from "@/api/category";

export default {
    props:["form"],
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      categoryList: [],
      categoryItems: [],
      rules: {},
    };
  },
  created() {
    getCategory().then(({ data }) => {
      this.categoryList = data.data;
    });
  },
  methods: {
    changeCategoryItem(cateVal) {
      for (let i = 0; i < this.categoryList.length; i++) {
        if (cateVal === this.categoryList[i].id) {
          this.categoryItems = this.categoryList[i].c_items;
        }
      }

    },
    next() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("next",this.form)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>

</style>
