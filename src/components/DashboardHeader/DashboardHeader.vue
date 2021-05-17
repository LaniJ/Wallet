<template>
    <div class="page-header__topContent">
        <div class="notification-image">
            <img src="@/assets/notification.svg" alt="notifications">
        </div>
        <h3 class="page-header__text">{{ firstName }} {{ lastName }}</h3>
        <div class="topContent__circle">
            <p class="topContent__initials">{{ currentUser.first_name.charAt(0).toUpperCase() }}{{ currentUser.last_name.charAt(0).toUpperCase() }}</p>
        </div>
        <div><img src="@/assets/down-arrow.svg" alt="down arrow"></div>
    </div>
</template>

<script src="./DashboardHeader.js"></script>
<style scoped src="./DashboardHeader.css"></style>
