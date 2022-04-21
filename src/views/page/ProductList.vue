<template>
  <div class="productList-container">
    <Search @sumbit="searchHandle" :categoryList="categoryList" />
    <ProductTable
      :data="products"
      :pagination="paginationObj"
      @changPage="change"
    />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import ProductTable from "@/components/ProductTable.vue";
import { getProducts } from "@/api/product";
import { getCategory } from "@/api/category";
export default {
  data() {
    return {
      products: [],
      paginationObj: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
      categoryList: [],
      categoryObj: {},
    };
  },
  components: { Search, ProductTable },
  async created() {
    this.getCategoryList();
    this.getProductsData();
  },
  methods: {
    async getCategoryList() {
      const { data } = await getCategory();
      this.categoryList = data.data;
      data.data.forEach((it) => {
        this.categoryObj[it.id] = it.name;
      });
    },
    async getProductsData(form) {
      const { data } = await getProducts({
        page: this.paginationObj.current,
        size: this.paginationObj.pageSize,
        ...form,
      });
      this.products = data.data.map((it, i) => {
        return {
          ...it,
          category: this.categoryObj[it.category],
        };
      });
      this.paginationObj.total = data.total;
    },
    change(page) {
      this.paginationObj.current = page.current;
      this.paginationObj.pageSize = page.pageSize;
      this.getProductsData();
    },
    searchHandle(form) {
      // this.searchForm = form;
      this.getProductsData(form);
    },
  },
};
</script>

<style>
</style>