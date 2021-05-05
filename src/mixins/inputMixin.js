export default {
  data() {
    return {
      innerValue: '',
    };
  },
  props: {
    name: {
      type: String,
    },
    value: {
      type: String,
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
