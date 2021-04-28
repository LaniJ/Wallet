export default {
  name: 'CustomButton',
  props: {
    size: {
      type: String,
      default: 'small',
    },
    color: {
      type: String,
      default: 'blue',
    },
  },
  computed: {
    computedSize() {
      return `btn__${this.size}`;
    },
    computedColor() {
      return `btn__${this.color}`;
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
