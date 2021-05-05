import inputMixin from '@/mixins/inputMixin';

export default {
  mixins: [inputMixin],
  name: 'Radio',
  props: {
    id: {
      type: String,
      default: 'Naira',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
