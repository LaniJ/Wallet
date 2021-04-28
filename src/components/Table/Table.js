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
  },
  data() {
    return {
      transactions: [
        {
          type: 'Wallet Deposit',
          date: 'May 27, 2020',
          time: '12:38 PM',
          status: 'Successful',
          amount: '30,000',
        },
        {
          type: 'Wallet Transfer',
          date: 'April 18, 2020',
          time: '12:38 PM',
          status: 'Failed',
          amount: '30,000',
        },
        {
          type: 'Wallet Transfer',
          date: 'May 27, 2020',
          time: '12:38 PM',
          status: 'Failed',
          amount: '18,000',
        },
        {
          type: 'Wallet Deposit',
          date: 'May 27, 2020',
          time: '12:38 PM',
          status: 'Successful',
          amount: '23,000',
        },
        {
          type: 'Wallet Transfer',
          date: 'May 27, 2020',
          time: '12:38 PM',
          status: 'Failed',
          amount: '500',
        },
        {
          type: 'Wallet Deposit',
          date: 'May 27, 2020',
          time: '12:38 PM',
          status: 'Successful',
          amount: '30000',
        },
        {
          type: 'Wallet Transfer',
          date: 'May 27, 2020',
          time: '12:38 PM',
          status: 'Failed',
          amount: '25,000',
        },
        {
          type: 'Wallet Deposit',
          date: 'May 27, 2020',
          time: '12:38 PM',
          status: 'Successful',
          amount: '71,540',
        },
      ],
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
