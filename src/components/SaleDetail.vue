<template>
  <div class="sale-detail">
    <a-form-model
      :model="form"
      ref="ruleForm"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="商品售价" prop="price" required>
        <a-input v-model="form.price" />
      </a-form-model-item>

      <a-form-model-item label="折扣价格" prop="price_off">
        <a-input v-model="form.price_off" />
      </a-form-model-item>

      <a-form-model-item label="商品库存" required prop="inventory">
        <a-input v-model="form.inventory" />
      </a-form-model-item>

      <a-form-model-item label="计量单位" prop="unit" required>
        <a-input v-model="form.unit" />
      </a-form-model-item>

      <a-form-model-item label="商品相册" prop="img">
        <a-upload
          action="https://mallapi.duyiedu.com/upload/images?appkey=mallzjw_1650121094859"
          list-type="picture-card"
          :file-list="fileList"
          @preview="handlePreview"
          @change="handleChange"
          name="avatar"
        >
          <div v-if="fileList.length < 8">
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">Upload</div>
          </div>
          <a-modal
            :visible="previewVisible"
            :footer="null"
            @cancel="handleCancel"
          >
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </a-upload>
      </a-form-model-item>

      <a-form-model-item class="next-btn" :wrapperCol="{ span: 24 }">
        <a-button type="default" @click="prev"> 上一步 </a-button>
        <a-button type="primary" @click="next"> 完成 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default {
  props: ["form"],
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      rules: {},
      fileList: [],
      loading: false,
    };
  },
  created() {
    if (this.form.images.length > 0) {
      this.fileList = this.form.images.map((it,i) => {
        return {
          uid: i,
          name: `image-${i}.png`,
          status: "done",
          url:it,
        };
      });
    }
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    handleChange({ file, fileList }) {
      this.fileList = fileList;

      if (file.status === "done") {
        this.form.images.push(file.response.data.url);
      } else if (file.status === "removed") {
        const url = file.response.data.url;
        this.form.images = this.form.images.filter((it) => it != url);
      }
      // console.log(this.fileList);
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    prev() {
      this.$emit("prev");
    },
    next() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("next");
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
