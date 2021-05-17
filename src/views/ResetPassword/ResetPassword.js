import { mapActions } from 'vuex';

import Auth from '@/components/Auth';
import CustomButton from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import CustomInput from '../../components/Input';
import Loader from '../../components/Loader';

export default {
  name: 'Reset',
  data() {
    return {
      form: {
        password: '',
        confirmPassword: '',
      },
      isLoading: false,
      errorMsg: '',
    };
  },
  components: {
    Auth,
    CustomInput,
    CustomButton,
    PasswordInput,
    Loader,
  },
  methods: {
    ...mapActions({
      reset: 'auth/resetPassword',
    }),
    async resetPassword() {
      this.isLoading = true;
      this.errorMsg = '';
      const { token } = this.$route.query;
      const payload = this.form.password;
      console.log(payload);
      const response = await this.reset({ password: payload, token });
      console.log('check :', response);
      if (response.status === 'Success') {
        console.log(response.status);
        this.$router.push('/login');
      } else {
        this.errorMsg = 'Something went wrong. Please retry.';
      }
      this.isLoading = false;
    },
  },
};
