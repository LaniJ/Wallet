<template>
    <div>
        <!-- <label class="label" for="title">{{ title }} </label>
        <input class="input" :class="{'input__error': hasError }" :type="type" v-model="input" :placeholder="placeholder"> -->

        <div class="password-input">
          <label class="label" for="password">{{ title }}</label>
          <input class="input" :type="passwordType" placeholder="•••••••••">
          <span class="password-icon" @click="togglePassword">

            <img v-if="!showPassword" src="@/assets/password-hidden.svg" alt="password icon" svg-inline>
            <img v-else src="@/assets/password-visible.svg" alt="password icon" svg-inline>
          </span>
        </div>
    </div>
</template>
<script src="./PasswordInput.js"></script>
<style scoped src="./PasswordInput.css"></style>
