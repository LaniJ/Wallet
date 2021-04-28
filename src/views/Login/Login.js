import Auth from '@/components/Auth';
import CustomButton from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import CustomInput from '../../components/Input';

export default {
  name: 'FormInput',
  components: {
    Auth,
    CustomInput,
    CustomButton,
    PasswordInput,
  },
  methods: {
    register() {
      console.log('Button works');
    },
  },
};
