export default {
  name: 'Pagination',
  data() {
    return {
    //   currentPage: 1,
    };
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
  },
};
