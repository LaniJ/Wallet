<template>
  <Auth mainText="Log in" subText="Great to have you back">
    <div class="hero-section__formContent">
    <ValidationObserver slim v-slot="{ invalid }">
      <form action @submit.prevent="login">
          <div class="input-block">
            <CustomInput title="Email Address" placeholder="johndoe@example.com" type="email" name="Email" rules="required|email" v-model="form.email" />
          </div>
          <div class="input-block">
            <PasswordInput title="Password" name="Password" v-model="form.password"
            rules="required|alpha_dash|min:7"/>
          </div>
          <div class="forgotPassword">
            <router-link to="/forgotpassword" exact>Forgot Password?</router-link>
          </div>
          <CustomButton size="large" :disabled="invalid">
            <Loader v-if="isLoading"/>
            <span v-else>Log In</span>
          </CustomButton>
          <small class="invalid"> {{ errorMsg }}</small>
      </form>
    </ValidationObserver>
    </div>
    <div class="sign-in">
      Don't have an account?
      <router-link to="/signup" exact>Register now
      </router-link>
    </div>
  </Auth>
</template>

<script src="./Login.js"></script>
<style scoped src="./Login.css"></style>
