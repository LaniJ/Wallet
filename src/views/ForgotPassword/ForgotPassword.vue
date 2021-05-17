<template>
  <Auth mainText="Forgot Password" subText="Kindly enter your registered email to reset your passsword">
    <div class="hero-section__formContent">
      <ValidationObserver slim v-slot="{ invalid }">
        <form action @submit.prevent="sendResetMail">
          <div class="input-block">
            <CustomInput
            title="Email Address"
            placeholder="johndoe@example.com"
            type="email" name="Email"
            rules="required|email"
            v-model="form.email"/>
          </div>
          <CustomButton
            size="large"
            :disabled="invalid">
            <Loader v-if="isLoading"/>
            <span v-else>Recover Password</span>
          </CustomButton>
          <small class="invalid"> {{ errorMsg }}</small>
        </form>
      </ValidationObserver>
    </div>
    <div class="sign-in center"><router-link to="/login" exact>Return to Log in</router-link>
    </div>
  </Auth>
</template>

<script src="./ForgotPassword.js"></script>
<style scoped src="./ForgotPassword.css"></style>
