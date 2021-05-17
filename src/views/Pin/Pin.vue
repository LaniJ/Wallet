<template>
  <Auth mainText="Create Pin" subText="Create pin to enable transfer">
    <div class="otp-section__form">
        <h3 class="otp-section__form__text">
          Kindly create your <br> transaction pin
        </h3>
        <ValidationObserver slim v-slot="{ invalid }">
          <form action @submit.prevent="submit">
            <div class="otp-section__form__code">
                    <input class="code__input"
                    type="tel"
                    placeholder="*"
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
                    placeholder="*">

                    <input class="code__input"
                    type="tel"
                    maxlength="1"
                    v-model="num_3"
                    @keyup="onKeyup"
                    placeholder="*">

                    <input class="code__input"
                    type="tel"
                    placeholder="*"
                    maxlength="1"
                    v-model="num_4"
                    @keyup="onKeyup"
                    @keyup.enter="submit"
                    >
            </div>
            <CustomButton size="large" :disabled="invalid" >
                <Loader v-if="isLoading"/>
                <span v-else>Create Pin</span>
              </CustomButton>
              <small class="invalid"> {{ errorMsg }}</small>
          </form>
        </ValidationObserver>
    </div>
  </Auth>
</template>

<script src="./Pin.js"></script>
<style scoped src="./Pin.css"></style>
