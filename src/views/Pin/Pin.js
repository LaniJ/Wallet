import { mapActions, mapGetters } from 'vuex';

import Auth from '@/components/Auth';
import CustomButton from '@/components/Button';
import Loader from '../../components/Loader';

export default {
  name: 'OTP',
  components: {
    Auth,
    Loader,
    CustomButton,
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
      choosePin: 'auth/createPin',
      userDetails: 'auth/callUserDetails',
    }),
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
    async submit() {
      this.isLoading = true;
      const payload = { pin: this.num_1 + this.num_2 + this.num_3 + this.num_4 };
      // console.log(payload);
      this.num_1 = '';
      this.num_2 = '';
      this.num_3 = '';
      this.num_4 = '';

      const response = await this.choosePin(payload);
      console.log('Helllo');
      console.log(response);
      console.log(response.status);
      if (response.status === 'Success') {
        console.log(response.status);
        const details = await this.userDetails();
        console.log(details);
        this.$router.push('/dashboard');
      } else {
        this.errorMsg = 'Kindly input your desired pin';
      }
      this.isLoading = false;
    },
  },
  watch: {
    // num_4(val) {
    //   if (val !== '') {
    //     this.submit();
    //   }
    // },
  },
  computed: {
    ...mapGetters({
      userEmail: 'auth/userEmail',
    }),
  },
};
