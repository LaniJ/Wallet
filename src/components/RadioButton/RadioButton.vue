<template>
     <div class="currency-type">
        <!-- <input type="radio" id="naira" value="naira" name="currency" checked>
        <label for="naira">{{ title }}</label> -->

        <input type="radio" :id="id" :value="value" :name="name">
        <label :for="id">{{ title }}</label>
        <br>
    </div>
</template>

<script src="./RadioButton.js"></script>
<style scoped src="./RadioButton.css"></style>
