import { mapGetters, mapActions } from 'vuex';

import Sidenavbar from '@/components/Sidebar';
import MainHeader from '@/components/DashboardHeader';
import TransactionTable from '@/components/Table';
import RadioBtn from '@/components/RadioButton';
import CustomInput from '@/components/Input';
import CustomButton from '@/components/Button';
import Modal from '@/components/Modal';
// import Transactions from '@/tableData/tableData';
import Loader from '../../components/Loader';

export default {
  name: 'Dashboard',
  components: {
    Sidenavbar,
    MainHeader,
    CustomInput,
    TransactionTable,
    RadioBtn,
    CustomButton,
    Modal,
    Loader,
  },

  // commit to state
  // use getter to get it
  // in vue template, replace data property with new transations
  data() {
    return {
      form: {
        amount: '',
        recipientUsername: '',
        pin: '',
      },
      isActive: false,
      fundActive: false,
      sideNavActive: false,
      mobileView: true,
      showNav: false,
      perPage: 6,
      recentTransactions: [
      ],
      currencyOption: 'naira',
      transactionType: [
        {
          value: 'naira',
          title: 'Naira',
        },
        {
          value: 'dollar',
          title: 'Dollar',
        },
      ],
      transactionExists: false,
      isLoading: false,
      errorMsg: '',
      items: [],
    };
  },
  methods: {
    ...mapActions({
      addFunds: 'auth/fundWallet',
      showTransactions: 'auth/transactionHistory',
      recipient: 'auth/checkRecipient',
    }),
    toggleTransferModal() {
      this.isActive = !this.isActive;
    },
    toggleFundModal() {
      this.fundActive = !this.fundActive;
    },
    // handleView() {
    //   this.mobileView = window.innerWidth <= 900;
    // },
    toggleSideNav() {
      this.sideNavActive = !this.sideNavActive;
    },
    async addToWallet() {
      this.isLoading = true;
      this.errorMsg = '';

      const payload = { amount: parseInt(this.form.amount, 10) };
      const response = await this.addFunds(payload);
      console.log('fund :', response);

      this.amount = '';

      if (response.status === 'Success') {
        console.log(response.status);
        const transactions = await this.showTransactions();
        console.log('transaction type', transactions);
        if (transactions) {
          this.items = transactions;
        }
        // this.transactionExists = true;
      } else {
        this.errorMsg = 'Something went wrong. Please retry';
      }
      this.isLoading = false;
    },
    async validateRecipient() {
      const payload = { recipientUsername: this.form.recipientUsername };
      console.log(payload);
      const response = await this.recipient(payload);
      console.log(response);
    },
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/getCurrentUser',
      currentUserTransactions: 'auth/transactions',
      nairaBalance: 'auth/userNairaBalance',
    }),

    dashboardTransactions() {
      return this.recentTransactions.slice(0, 6);
    },
    // checkTransactions() {
    //   const content = this.recentTransactions;
    //   if (content.length >= 1) {
    //     this.transactionExists = true;
    //   }
    // },
  },
  watch: {
    currentUserTransactions: {
      immediate: true,
      handler() {
        this.recentTransactions = this.currentUserTransactions;
      },
    },
    recentTransactions: {
      immediate: true,
      handler() {
        const content = this.recentTransactions;
        if (content.length >= 1) {
          this.transactionExists = true;
        }
      },
    },
  },
  // created() {
  //   this.handleView();
  // },
};
