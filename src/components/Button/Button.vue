<template>
    <button :class="['btn', computedSize, computedColor]" @click="handleClick">
        <slot />
    </button>
</template>

<script src="./Button.js"></script>
<style scoped src="./Button.css"></style>
