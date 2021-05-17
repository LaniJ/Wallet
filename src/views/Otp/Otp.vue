<template>
  <Auth mainText="OTP Verification" subText="A code has been sent to your email">
    <div class="otp-section__form">
        <h3 class="otp-section__form__text">Kindly enter your OTP to
            verify account
        </h3>
        <form action @submit.prevent="submit">
          <div class="otp-section__form__code">
                  <input class="code__input"
                  type="tel"
                  placeholder="0"
                  maxlength="1"
                  v-model="num_1"
                  @keyup="onKeyup"
                  >
                  <!-- pattern="([0-9])\w{0}" -->
                  <input class="code__input"
                  type="tel"
                  maxlength="1"
                  v-model="num_2"
                  @keyup="onKeyup"
                  placeholder="0">

                  <input class="code__input"
                  type="tel"
                  maxlength="1"
                  v-model="num_3"
                  @keyup="onKeyup"
                  placeholder="0">

                  <input class="code__input"
                  type="tel"
                  placeholder="0"
                  maxlength="1"
                  v-model="num_4"
                  @keyup="onKeyup"
                  @keyup.enter="submit"
                  >
          </div>
        </form>
        <div class="sign-in center">
          Didn't get the code?
          <!-- <router-link to="/login" exact>Resend</router-link> -->
          <a href="javascript:void(0)" @click.prevent="resendOtp">Resend</a>
          </div>
        <div class="loader">
          <Loader v-if="isLoading"/>
          <small class="invalid" v-else> {{ errorMsg }}</small>
        </div>
        <div>
          <p class="countdown">{{ getMinutes(timerCount) }}: {{ getSeconds(timerCount) }}</p>
        </div>
    </div>
  </Auth>
</template>

<script src="./Otp.js"></script>
<style scoped src="./Otp.css"></style>
