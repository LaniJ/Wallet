<template>
  <Auth mainText="Log in" subText="Great to have you back">
    <div class="hero-section__formContent">
    <form action @submit.prevent="register">
        <CustomInput :title="'Email Address'" :placeholder="'johndoe@example.com'" :type="'email'" />
        <PasswordInput title="Password"/>
        <div class="forgotPassword">
          <router-link to="/forgotpassword" exact>Forgot Password?</router-link>
        </div>
        <CustomButton size="large">Log In</CustomButton>
    </form>
    </div>
    <div class="sign-in">Don't have an account? <router-link to="/signup" exact>Register now</router-link>
    </div>

  </Auth>
</template>

<script src="./Login.js"></script>
<style scoped src="./Login.css"></style>
