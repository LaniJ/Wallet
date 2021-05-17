import { mapActions } from 'vuex';

import Auth from '@/components/Auth';
import CustomButton from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import CustomInput from '../../components/Input';
import Loader from '../../components/Loader';

export default {
  name: 'FormInput',
  data() {
    return {
      form: {
        email: '',
        password: '',
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
      user: 'auth/loginUser',
      userDetails: 'auth/callUserDetails',
    }),
    async login() {
      this.isLoading = true;
      this.errorMsg = '';

      const response = await this.user(this.form);
      console.log('login response :', response);
      console.log(response.status);
      if (response.status === 'Success') {
        console.log(response.status);
        // const details = await this.userDetails();
        // console.log(details);
        this.$router.push('/pin');
      } else {
        this.errorMsg = 'Invalid Login Details';
      }
      this.isLoading = false;
    },
  },
  // beforeRouteEnter(to, form, next) {

  // }
};
