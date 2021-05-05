<template>
     <!-- <div class="currency-type">
        <input type="radio" :id="id" :value="value" :name="name">
        <label :for="id">{{ title }}</label>
        <br>
    </div> -->
    <div class="status">
        <div class="currency-type" v-for="(option, index) in options" :key="index">
            <input type="radio" :id="option.title" :value="option.value" :name="name" v-model="innerValue">
            <label :for="option.title">{{ option.title }}</label>
            <br>
        </div>
    </div>
</template>

<script src="./RadioButton.js"></script>
<style scoped src="./RadioButton.css"></style>
