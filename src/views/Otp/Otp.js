import { mapActions, mapGetters } from 'vuex';

import Auth from '@/components/Auth';
import Loader from '../../components/Loader';

export default {
  name: 'OTP',
  components: {
    Auth,
    Loader,
  },
  data() {
    return {
      timerCount: 60,
      num_1: '',
      num_2: '',
      num_3: '',
      num_4: '',
      isLoading: false,
      errorMsg: '',
    };
  },
  methods: {
    ...mapActions({
      otp: 'auth/sendOtp',
      resendCode: 'auth/resendOtp',
      // checkEmail: 'auth/verifyEmail',
    }),
    // This can also prevent copy + paste invalid character
    // filterInput(e) {
    //   e.target.value = e.target.value.replace(/[^0-9]+/g, '');
    // },
    onKeyup($event) {
      const newEvent = $event.target.value;
      newEvent.replace(/[^0-9]/g, '');
      // console.log(event.keyCode);
      if (($event.keyCode >= 48 && $event.keyCode <= 57) || ($event.keyCode >= 96 && $event.keyCode <= 105)) {
        const next = $event.target.nextElementSibling;
        if (next === null) return;
        $event.target.nextElementSibling.focus();
      }
    },
    getMinutes(number) {
      const time = number;
      const minutes = Math.floor(time / 60);
      return `${minutes}`;
    },
    getSeconds(number) {
      const time = number;
      let seconds = time % 60;
      seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${seconds}`;
    },
    async submit() {
      this.isLoading = true;
      const payload = { otp: this.num_1 + this.num_2 + this.num_3 + this.num_4 };
      // console.log(payload);

      const response = await this.otp(payload);
      if (response.status === 'Success') {
        console.log(response.status);
        this.$router.push('/login');
      } else {
        this.errorMsg = 'Incorrect code. Please retry';
      }
      this.isLoading = false;
    },
    async resendOtp() {
      this.num_1 = '';
      this.num_2 = '';
      this.num_3 = '';
      this.num_4 = '';
      const payload = this.userEmail;
      const response = await this.resendCode({ email: payload });
      console.log(response);
      this.errorMsg = 'Otp code sent.';
      this.timerCount = 60;
    },
  },
  watch: {
    // userEmail: {
    //   immediate: true,
    //   handler() {
    //     this.email = this.userEmail;
    //   },
    // },
    num_4(val) {
      if (val !== '') {
        this.submit();
      }
    },
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount -= 1;
          }, 1000);
        } else {
          this.errorMsg = 'Otp expired. Click "resend" to get a new code';
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({
      userEmail: 'auth/userEmail',
    }),
  },
};
