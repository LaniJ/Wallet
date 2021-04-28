<template>
    <div>
        <section class="createAccount">
            <nav class="container nav">
            <a href="/" class="nav__logo">
                <img src="@/assets/logo.svg" alt="wallet logo" />
            </a>
            </nav>
            <div class="container hero-section">
            <div class="hero-section__text">
                <h2>{{ mainText }}</h2>
                <h3>{{ subText }}</h3>
            </div>
            <div class="hero-section__form">
                <slot />
            </div>
            </div>
        </section>
    </div>
</template>

<script src="./Auth.js"></script>
<style scoped src="./Auth.css"></style>
