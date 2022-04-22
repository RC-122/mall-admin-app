<template>
  <div class="productList-container">
    <Search @sumbit="searchHandle" :categoryList="categoryList" />
    <a-button class="product-add-btn"
      ><router-link :to="{ name: 'AddProduct' }">添加商品</router-link></a-button
    >
    <ProductTable
      :data="products"
      :pagination="paginationObj"
      @changPage="change"
      @confirmHandle="delHnadle"
      @edit="editHandle"
    />
  </div>
</template>

<script>
import Search from "@/components/Search";
import ProductTable from "@/components/ProductTable.vue";
import { getProducts, delProduct } from "@/api/product";
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
      searchForm:{},
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
    editHandle(record){
      this.$router.push({
        name: "EditProduct",
        params: {
          id: record.id,
        },
      });
    },
    async delHnadle(record){
      await delProduct(record.id);
      this.getProductsData();
    },
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
        ...this.searchForm,
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
      this.searchForm = form;
      this.getProductsData();
    },
  },
};
</script>

<style lang="less" scoped>
.productList-container{
  position: relative;
  .product-add-btn{
    position: absolute;
    right: 20px;
    top:14px;
  }
}
</style>