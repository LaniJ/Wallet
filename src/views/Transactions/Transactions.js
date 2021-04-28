import Sidenavbar from '@/components/Sidebar';
import MainHeader from '@/components/DashboardHeader';
import TransactionTable from '@/components/Table';
import RadioBtn from '@/components/RadioButton';
import CustomInput from '@/components/Input';
import CustomButton from '@/components/Button';
import Modal from '@/components/Modal';
import Pagination from '@/components/Pagination';

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
    Pagination,
  },
  data() {
    return {
      filter: false,
    //   showModal: true,
      // openTransferModal: true,
    //   openFundModal: true,
    };
  },
  methods: {
    toggleFilterModal() {
      this.filter = !this.filter;
    },
  },
};
