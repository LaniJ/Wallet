<template>
  <Auth mainText="Forgot Password" subText="Kindly enter your registered email to reset your passsword">
    <div class="hero-section__formContent">
    <form action @submit.prevent="">
        <CustomInput :title="'Email Address'" :placeholder="'johndoe@example.com'" :type="'email'" />
        <CustomButton size="large">Recover Password</CustomButton>
    </form>
    </div>
    <div class="sign-in center"><router-link to="/login" exact>Return to Log in</router-link>
    </div>
  </Auth>
</template>

<script src="./ForgotPassword.js"></script>
<style scoped src="./ForgotPassword.css"></style>
