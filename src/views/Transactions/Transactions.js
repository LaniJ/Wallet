import Sidenavbar from '@/components/Sidebar';
import MainHeader from '@/components/DashboardHeader';
import TransactionTable from '@/components/Table';
import RadioBtn from '@/components/RadioButton';
import CustomInput from '@/components/Input';
import CustomButton from '@/components/Button';
import Modal from '@/components/Modal';
import Pagination from '@/components/Pagination';
import Transactions from '@/tableData/tableData';

export default {
  name: 'Transactions',
  components: {
    Sidenavbar,
    MainHeader,
    CustomInput,
    TransactionTable,
    RadioBtn,
    CustomButton,
    Modal,
    Pagination,
  },
  data() {
    return {
      filter: false,
      currentPage: 1,
      perPage: 8,
      transactions: Transactions,
      sideNavActive: false,
      totalPages: 10,
      status: 'successful',
      transactionStatus: [
        {
          value: 'successful',
          title: 'Successful',
        },
        {
          value: 'failed',
          title: 'Failed',
        },
      ],
    };
  },
  methods: {
    toggleFilterModal() {
      this.filter = !this.filter;
    },
    changeCurrentPage(page) {
      this.currentPage = page;
    },
    toggleSideNav() {
      this.sideNavActive = !this.sideNavActive;
    },
  },
  computed: {
    paginatedTransactions() {
      const from = (this.perPage * this.currentPage) - this.perPage;
      const to = from + this.perPage;
      return this.transactions.slice(from, to);
    },
  },
};
