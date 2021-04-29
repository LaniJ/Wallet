export default {
  name: 'PasswordInput',
  data() {
    return {
      showPassword: false,
      passwordType: 'password',
      innerValue: '',
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
    value: {
      type: String,
    },
    name: {
      type: String,
    },
    rules: {
      type: String,
    },
    vid: {
      type: String,
      default: '',
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
  watch: {
    innerValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },
    value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
