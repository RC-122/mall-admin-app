<template>
  <div class="add-product">
    <a-steps style="width: 50%; margin: 0 auto" :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <BasicDetail v-if="current === 0" @next="next" :form="form" />
      <SaleDetail
        v-else-if="current === 1"
        @prev="prev"
        @next="confirm"
        :form="form"
      />
    </div>
  </div>
</template>
<script>
import BasicDetail from "@/components/BasicDetail";
import SaleDetail from "@/components/SaleDetail";
import { addProduct, checkProduct, editProduct } from "@/api/product";
export default {
  components: {
    BasicDetail,
    SaleDetail,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "填写基本商品信息",
        },
        {
          title: "填写商品销售信息",
        },
      ],
      form: {
        title: "",
        desc: "",
        category: "",
        c_item: [],
        tags: [],
        price: 0,
        price_off: 0,
        inventory: 0,
        unit: "",
        images: [],
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    checkProduct(id).then(({ data }) => {
      this.form = data;
    });
  },
  methods: {
    next(form) {
      this.current++;
      this.form = {
        ...this.form,
        ...form,
      };
    },
    prev() {
      this.current--;
    },
    confirm() {
      if (this.$route.params.id) {
        editProduct(this.form).then((res) => {
            this.$message.success("修改成功");
            this.$router.push({
              name:"ProductList"
            })
        });
      } else {
        addProduct(this.form)
          .then((res) => {
            this.$message.success("添加成功");
            this.$router.push({
              name:"ProductList"
            })
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.add-product {
  width: 80%;
  margin: 0 auto;
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }
  .steps-action {
    margin-top: 24px;
  }
}
</style>
