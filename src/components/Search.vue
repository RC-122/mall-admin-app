<template>
  <div class="search-container">
    <a-form-model
      layout="inline"
      :model="searchForm"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item label="搜索关键字">
        <a-input v-model="searchForm.searchWord" placeholder="请输入关键字">
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="商品类目">
        <a-select
          v-model="searchForm.category"
          placeholder="选择商品类目"
          @change="handleChange"
          allowClear
          class="category-option"
        >
          <a-select-option
            v-for="it in categoryList"
            :key="it._id"
            :value="it.id"
          >
            {{ it.name }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
        >
          查询
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchForm: {
        searchWord: "",
        category: "",
      },
    };
  },
  props: ["categoryList"],

  methods: {
    handleSubmit(e) {
      this.$emit("sumbit", this.searchForm);
    },
    handleChange(val) {
      this.searchForm.category = val;
    },
  },
};
</script>

<style lang="less" scoped>
.search-container {
  padding: 10px 30px;
  .category-option {
    width: 200px;
  }
}
</style>