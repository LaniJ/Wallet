import Sidenavbar from '@/components/Sidebar';
import MainHeader from '@/components/DashboardHeader';
import TransactionTable from '@/components/Table';
import RadioBtn from '@/components/RadioButton';
import CustomInput from '@/components/Input';
import CustomButton from '@/components/Button';
import Modal from '@/components/Modal';
import Transactions from '@/tableData/tableData';

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
  },
  data() {
    return {
      isActive: false,
      fundActive: false,
      sideNavActive: false,
      mobileView: true,
      showNav: false,
      perPage: 6,
      recentTransactions: Transactions,
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
    };
  },
  methods: {
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
  },
  computed: {
    dashboardTransactions() {
      return this.recentTransactions.slice(0, 6);
    },
  },
  // watch: {
  // },
  // created() {
  //   this.handleView();
  // },
};
