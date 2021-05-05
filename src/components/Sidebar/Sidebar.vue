<template>
    <!-- bind class to sidebar -->
    <aside class="sidebar" :class="{ show }">
        <div class="sidebar-wrapper">
            <div class="sidebar__header">
                <h1>
                    <span>
                        <img src="@/assets/Union.svg" alt="">
                    </span>
                    Wallet
                </h1>
                <div class="navBtn">
                     <svg @click="$emit('close')" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9997 10.5862L16.9497 5.63623L18.3637 7.05023L13.4137 12.0002L18.3637 16.9502L16.9497 18.3642L11.9997 13.4142L7.04974 18.3642L5.63574 16.9502L10.5857 12.0002L5.63574 7.05023L7.04974 5.63623L11.9997 10.5862Z"/>
                    </svg>
                </div>
            </div>
            <div class="sidebar__menu">
                <ul>
                    <li>
                        <router-link to="/dashboard" exact>
                            <span class="sidebar__menu__icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.71429 2C2.76751 2 2 2.76751 2 3.71429V6.78571C2 7.73249 2.76751 8.5 3.71429 8.5H5.42857C6.37535 8.5 7.14286 7.73249 7.14286 6.78571V3.71429C7.14286 2.76751 6.37535 2 5.42857 2H3.71429Z"
                                    fill="#B3BECF"/>
                                <path
                                    d="M3.71429 9.78571C2.76751 9.78571 2 10.5532 2 11.5V12.2857C2 13.2325 2.76751 14 3.71429 14H5.42857C6.37535 14 7.14286 13.2325 7.14286 12.2857V11.5C7.14286 10.5532 6.37535 9.78571 5.42857 9.78571H3.71429Z"
                                    fill="#B3BECF"/>
                                <path
                                    d="M8.85714 3.71429C8.85714 2.76751 9.62465 2 10.5714 2H12.2857C13.2325 2 14 2.76751 14 3.71429V4.40593C14 5.35271 13.2325 6.12022 12.2857 6.12022H10.5714C9.62465 6.12022 8.85714 5.35271 8.85714 4.40593V3.71429Z"
                                    fill="#B3BECF"/>
                                <path
                                    d="M8.85714 9.21429C8.85714 8.26751 9.62465 7.5 10.5714 7.5H12.2857C13.2325 7.5 14 8.26751 14 9.21429V12.2857C14 13.2325 13.2325 14 12.2857 14H10.5714C9.62465 14 8.85714 13.2325 8.85714 12.2857V9.21429Z"
                                    fill="#B3BECF"/>
                            </svg>
                            </span>
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/transactions" exact>
                            <span>
                                <img src="@/assets/history.svg" svg-inline />
                            </span>
                            History
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#" exact>
                            <span>
                                <img src="@/assets/profile.svg" alt="">
                            </span>
                            Profile
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script src="./Sidebar.js"></script>
<style scoped src="./Sidebar.css"></style>
