<template>
  <Auth mainText="Forgot Password" subText="Kindly enter your registered email to reset your passsword">
    <div class="hero-section__formContent">
      <ValidationObserver slim v-slot="{ invalid }">
        <form action @submit.prevent="">
          <div class="input-block">
            <CustomInput title="Email Address" placeholder="johndoe@example.com" type="email" name="Email" rules="required|email"  />
          </div>
          <CustomButton size="large" :disabled="invalid">Recover Password</CustomButton>
        </form>
      </ValidationObserver>
    </div>
    <div class="sign-in center"><router-link to="/login" exact>Return to Log in</router-link>
    </div>
  </Auth>
</template>

<script src="./ForgotPassword.js"></script>
<style scoped src="./ForgotPassword.css"></style>
