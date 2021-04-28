<template>
  <Auth mainText="Reset Password" subText="Create a unique password to keep your account protected">
    <div class="hero-section__formContent">
        <form action @submit.prevent="">
            <PasswordInput title="New Password"/>
            <PasswordInput title="Confirm Password"/>
            <!-- <CustomInput title="Password" placeholder="•••••••••" type="password" />
            <CustomInput title="Password" placeholder="•••••••••" type="password" /> -->

            <CustomButton size="large">Reset Password</CustomButton>
        </form>
    </div>
  </Auth>
</template>

<script src="./ResetPassword.js"></script>
<style scoped src="./ResetPassword.css"></style>
