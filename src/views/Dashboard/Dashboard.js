import Sidenavbar from '@/components/Sidebar';
import MainHeader from '@/components/DashboardHeader';
import TransactionTable from '@/components/Table';
import RadioBtn from '@/components/RadioButton';
import CustomInput from '@/components/Input';
import CustomButton from '@/components/Button';
import Modal from '@/components/Modal';

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
    //   showModal: true,
      // openTransferModal: true,
    //   openFundModal: true,
    };
  },
  methods: {
    toggleTransferModal() {
      this.isActive = !this.isActive;
    },
    toggleFundModal() {
      this.fundActive = !this.fundActive;
    },
  },
};
