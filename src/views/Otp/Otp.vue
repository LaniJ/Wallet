<template>
  <Auth mainText="OTP Verification" subText="A code has been sent to your email">
    <div class="otp-section__form">
        <h3 class="otp-section__form__text">Kindly enter your OTP to
            verify account
        </h3>
        <div class="otp-section__form__code">
                <input class="code__input" type="tel"
                placeholder="0">
                <input class="code__input" type="tel"
                placeholder="0">
                <input class="code__input" type="tel"
                placeholder="0">
                <input class="code__input" type="tel"
                placeholder="0">
        </div>
        <div class="sign-in center">Didn't get the code? <a href="">Resend</a></div>
        <div>
            <p class="countdown">00:59</p>
        </div>
    </div>
  </Auth>
</template>

<script src="./Otp.js"></script>
<style scoped src="./Otp.css"></style>
