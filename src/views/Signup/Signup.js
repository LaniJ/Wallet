import { mapActions } from 'vuex';

import Auth from '@/components/Auth';
import CustomButton from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import CustomInput from '../../components/Input';
import Loader from '../../components/Loader';

export default {
  name: 'SignupForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        dob: '',
        phoneNumber: '',
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
      registerUser: 'auth/signUp',
      // uniqueUsername: 'auth/checkUsername',
      // checkUsername: 'auth/checkUsername',
    }),
    // checkUser() {
    //   const user = { username: this.form.username };
    //   // console.log('My User :', user);
    //   this.uniqueUsername(user);
    //   // this.checkUsername(this.form.username);
    // },
    async register() {
      this.isLoading = true;
      this.errorMsg = '';

      const response = await this.registerUser(this.form);
      console.log('check :', response);
      if (response.status === 'Success') {
        // console.log(response.status);
        this.$router.push('/otp');
      } else {
        this.errorMsg = 'Something went wrong. Please retry';
      }
      this.isLoading = false;
    },
  },
};
