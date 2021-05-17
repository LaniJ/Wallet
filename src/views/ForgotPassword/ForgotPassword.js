import { mapActions } from 'vuex';

import Auth from '@/components/Auth';
import CustomButton from '@/components/Button';
import CustomInput from '../../components/Input';
import Loader from '../../components/Loader';

export default {
  name: 'ForgotPassword',
  data() {
    return {
      form: {
        email: '',
      },
      isLoading: false,
      errorMsg: '',
    };
  },
  components: {
    Auth,
    CustomInput,
    CustomButton,
    Loader,
  },
  methods: {
    ...mapActions({
      forgotPassword: 'auth/forgotPassword',
    }),
    async sendResetMail() {
      this.isLoading = true;
      this.errorMsg = '';

      const response = await this.forgotPassword(this.form);
      console.log('check :', response);
      if (response.status === 'Success') {
        console.log(response.status);
        this.$router.push('/resetpassword');
      } else {
        this.errorMsg = 'Invalid email';
      }
      this.isLoading = false;
    },
  },
};
