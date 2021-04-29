<template>
    <div>
      <ValidationProvider :rules="rules" v-slot="{ errors }" :vid="vid">
        <!-- <label class="label" for="title">{{ title }} </label>
        <input class="input" :class="{'input__error': hasError }" :type="type" v-model="input" :placeholder="placeholder"> -->
        <div class="password-input">
          <label class="label" for="password">{{ title }}</label>
          <input
          class="input"
          :class="{'input__error': errors && errors.length }"
          :type="passwordType"
          v-model="innerValue"
          :name="name"
          placeholder="•••••••••">
          <span class="password-icon" @click="togglePassword">

            <img v-if="!showPassword" src="@/assets/password-hidden.svg" alt="password icon" svg-inline>
            <img v-else src="@/assets/password-visible.svg" alt="password icon" svg-inline>
          </span>
          <small class="invalid" v-for="error in errors" :key="error"> {{ error }} </small>
        </div>
        </ValidationProvider>
    </div>
</template>
<script src="./PasswordInput.js"></script>
<style scoped src="./PasswordInput.css"></style>
