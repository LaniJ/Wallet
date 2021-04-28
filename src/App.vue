<template>
  <div id="app">
    <!-- <h3> test </h3> -->
    <router-view></router-view>
    <!-- <div> -->
      <!-- <CustomButton @click="rippp">Click me!</CustomButton>
      <br><br>
      <CustomButton :color="'light'">Click me!</CustomButton>
      <br>
      <br>
      <CustomButton :color="'blue-outline'">Click me!</CustomButton>
      <br><br>
      <div style="width: 50rem; margin: auto">
        <CustomButton :size="'large'">Click me!</CustomButton>
        <br><br>
        <CustomButton :size="'large'" :color="'light'">lani says hi!</CustomButton>
      </div> -->
      <!-- <AuthHead /> -->
      <!-- <MainHeader /> -->
      <!-- <AuthText /> -->
      <!-- <RadioBtn :title="radioTitle" /> -->
      <!-- <AuthText mainText="Hello there" subText="glad to have you here"/> -->
      <!-- <FormInput /> -->
      <!-- <br><br>
      <TransactionTable /> -->
      <!-- <Sidebar></Sidebar> -->
      <!-- <Sidenavbar /> -->
    <!-- </div> -->
    <!-- <Modal modalName="Fund Wallet" /> -->
    <!-- <CustomButton size="large" :color="'light'">lani says hi!</CustomButton> -->
    <!-- <Pagination /> -->
   <!-- <div style="width: 50rem; margin: auto"> -->
      <!-- <CustomInput :title="title" :placeholder="placeholder" :value="name" /> -->
      <!-- <PasswordInput title="Passwords"/> -->
       <!-- <CustomInput :title="title" :placeholder="placeholder"  v-model="lastName" />
      <CustomInput :title="title" :placeholder="placeholder"  v-model="lastName" />
      <CustomInput hasError :title="title" :placeholder="placeholder"  v-model="lastName" />
       -->
    <!-- </div> -->
  </div>
</template>

<script>
// import CustomButton from '@/components/Button';
// import Sidenavbar from './components/Sidebar';
// import CustomInput from './components/Input';
// import PasswordInput from './components/PasswordInput';
// import AuthHead from './components/AuthHeader';
// import MainHeader from './components/DashboardHeader';
// import AuthText from './components/AuthMainText';
// import RadioBtn from './components/RadioButton';
// import TransactionTable from './components/Table';
// import Modal from './components/Modal';
// import Pagination from './components/Pagination';

export default {
  name: 'App',
  components: {
    // CustomButton,
    // Sidenavbar,
    // RadioBtn,
    // CustomInput,
    // PasswordInput,
    // AuthHead,
    // MainHeader,
    // AuthText,
    // FormInput,
    // TransactionTable,
    // Modal,
    // Pagination,
  },
  data() {
    return {
      // btnsize: 'small',
      title: 'First Name',
      placeholder: 'John Doe',
      name: 'Lani',
      lastName: 'tope',
      // radioTitle: 'Test Title',
    };
  },
  methods: {
    rippp() {
      console.log('kfjbkjb');
    },
    // input(value) {
    //   this.name = value;
    // },
  },
};
</script>

<style>
*,
*::before,
*::after {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 10px;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  height: 100vh;
  background-color:  #F4F7FC;
}
a,
a:hover,
a:visited {
  color: inherit;
  text-decoration: none;
}
img {
  height: 100%;
  width: auto;
}
li {
  list-style: none;
}
.container {
  padding: 0 3rem;
  max-width: 1216px;
  margin: 0 auto;
  width: 100%;
}
</style>
