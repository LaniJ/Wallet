export default {
  name: 'Table',
  props: {
    title: {
      type: String,
      default: 'Table Name',
    },
    status: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      default: 3000,
    },
    transactions: {
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          row1: 'Transaction Type',
          row2: 'Date',
          row3: 'Status',
          row4: 'Amount',
        },
      ],
    };
  },
};
