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
    totalPages: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
    },
  },
  computed: {
    lastPages() {
      return this.currentPage >= this.totalPages - 1;
    },
    pageList() {
      const { currentPage, totalPages, lastPages } = this;
      let page;
      if (lastPages) {
        page = totalPages - 1;
      } else if (currentPage === 1) {
        page = 2;
      } else {
        page = currentPage;
      }
      return [
        page - 1,
        page,
        page + 1,
      ];
    },
  },
};
