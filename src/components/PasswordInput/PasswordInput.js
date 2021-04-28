export default {
  name: 'PasswordInput',
  data() {
    return {
      showPassword: false,
      passwordType: 'password',
    };
  },
  props: {
    title: {
      type: String,
      default: 'Password',
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checkError() {
      return `input__${this.hasError}`;
    },
  },
  methods: {
    togglePassword() {
    //   console.log('SDVFre');
      if (this.passwordType === 'password') {
        this.passwordType = 'text';
      } else {
        this.passwordType = 'password';
      }
      //  this.type = this.passwordType;
      this.showPassword = !this.showPassword;
    },
  },
};
