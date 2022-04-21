<template>
  <a-table
    :columns="columns"
    :data-source="dataTable"
    :pagination="pagination"
    @change="changeHandle"
  >
    <div slot="operation">
      <a-button>编辑</a-button>
      <a-button>删除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    width: 80,
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "描述",
    dataIndex: "desc",
    key: "desc",
    ellipsis: true,
  },
  {
    title: "类目",
    dataIndex: "category",
    key: "category",
    ellipsis: true,
  },
  {
    title: "预售价格",
    dataIndex: "price",
    key: "price",
    ellipsis: true,
  },
  {
    title: "折扣价格",
    dataIndex: "price_off",
    key: "price_off",
    ellipsis: true,
  },
  {
    title: "标签",
    dataIndex: "tags",
    key: "tags",
    ellipsis: true,
  },
  {
    title: "限制购买量",
    dataIndex: "inventory",
    key: "inventory",
    ellipsis: true,
  },
  {
    title: "上架状态",
    dataIndex: "status",
    key: "status",
    ellipsis: true,
    customRender: (text, record) => {
      return record.status === 1 ? "上架" : "下架";
    },
  },

  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    scopedSlots: { customRender: "operation" },
  },
];

export default {
  data() {
    return {
      columns,
    };
  },
  props: ["data", "pagination"],
  mounted(){
  },
  computed: {
    dataTable() {
      return this.data.map((it) => {
        return {
          ...it,
          key: it._id,
        };
      });
    },
  },
  methods: {
    changeHandle(page) {
      this.$emit("changPage", page);
    },
  },
};
</script>
