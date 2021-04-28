<template>
    <div>
        <ValidationProvider :rules="rules" v-slot="{ errors }">
            <label class="label" for="title">{{ title }} </label>
            <input class="input" :class="{'input__error': errors && errors.length }" :type="type" v-model="innerValue" :placeholder="placeholder" :name="name">
            <small class="invalid" v-for="error in errors" :key="error"> {{ error }} </small>
        </ValidationProvider>
    </div>
</template>
<script src="./Input.js"></script>
<style scoped src="./Input.css"></style>
