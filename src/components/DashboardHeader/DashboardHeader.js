import { mapGetters } from 'vuex';

export default {
  name: 'DashboardHeader',
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    // capitalise() {
    //   this.firstName = this.currentUser.first_name;
    // },
    // const firstName = this.currentUser.first_name;
    // capitalizeFirstLetter() {
    //   const string = this.currentUser.first_name;
    //   this.firstName = string.charAt(0).toUpperCase() + string.slice(1);
    //   console.log(this.firstName);
    // },
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/getCurrentUser',
    }),
    // capitalizeFirstLetter() {
    //   this.currentUser.first_name = this.currentUser.first_name.charAt(0).toUpperCase() + this.currentUser.first_name.slice(1);
    //   console.log(this.firstName);
    // },
  },
  watch: {
    currentUser: {
      immediate: true,
      handler() {
        console.log(this.currentUser.first_name);
        const firstName = this.currentUser.first_name;
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        const lastName = this.currentUser.last_name;
        this.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      },
    },
  },
};
