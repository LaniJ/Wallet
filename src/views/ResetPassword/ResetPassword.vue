<template>
  <Auth mainText="Reset Password" subText="Create a unique password to keep your account protected">
    <div class="hero-section__formContent">
      <ValidationObserver slim v-slot="{ invalid }">
        <form action @submit.prevent="resetPassword">
          <div class="input-block">
            <PasswordInput
            title="New Password"
            name="Password"
            rules="required|alpha_dash|min:7|confirmed:confirmation"
            v-model="form.password"
            />
          </div>
          <div class="input-block">
            <PasswordInput
            title="Confirm Password"
            name="Confirm password"
            rules="required|alpha_dash|min:7"
            vid="confirmation"
            v-model="form.confirmPassword"
            />
          </div>
          <CustomButton size="large" :disabled="invalid">
            <Loader v-if="isLoading"/>
            <span v-else>Reset Password</span>
          </CustomButton>
          <small class="invalid"> {{ errorMsg }}</small>

        </form>
      </ValidationObserver>
    </div>
  </Auth>
</template>

<script src="./ResetPassword.js"></script>
<style scoped src="./ResetPassword.css"></style>
