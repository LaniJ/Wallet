export default {
  name: 'FormInput',
  data() {
    return {
      innerValue: '',
    };
  },
  props: {
    title: {
      type: String,
      default: 'name',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'John Doe',
    },
    value: {
      type: String,
    },
    size: {
      type: String,
      default: 'large',
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    rules: {
      type: String,
    },
  },
  // methods: {
  //   input(e) {
  //     this.$emit('change', e.target.value);
  //   },
  // },
  // methods: {
  //   validate() {
  //     this.error = '';
  //     if (this.input === undefined) {
  //       this.error = 'Please input value';
  //     } else if (this.input !== undefined && this.input.length < 5) {
  //       this.error = 'Input length should be greater than 5';
  //     }
  //   },
  // },
  computed: {
    // input: {
    //   get() {
    //     return this.value;
    //   },
    //   set(val) {
    //     this.$emit('input', val);
    //   },
    // },
    checkError() {
      return `input__${this.hasError}`;
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
