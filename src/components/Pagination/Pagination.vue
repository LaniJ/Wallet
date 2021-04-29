<template>
     <section class="footer">
        <div class="currentPage">
            <h3>Showing Page 1 of 10</h3>
        </div>
        <div class="allPages">
            <button @click="$emit('changePage', currentPage - 1)" :disabled="currentPage <= 1"
            class="gap footer-text">Prev</button>
            <!-- <button @click="$emit('changePage', 1)" class="footer-text" :class="{ active: currentPage === 1 }">1</button>
            <button @click="$emit('changePage', 2)" class="footer-text" :class="{ active: currentPage === 2 }">2</button> -->
            <button v-for="(page, index) in totalPages" :key="index" @click="$emit('changePage', page)"
            class="footer-text" :class="{ active: currentPage === page}">{{ page }}</button>
            <!-- <h3 class="ellipsis">...</h3>
            <button @click="$emit('changePage', 10)" class="footer-text">10</button> -->
            <button @click="$emit('changePage', currentPage + 1)" class="footer-text" :disabled="currentPage >= totalPages">Next</button>
        </div>
    </section>
</template>

<script src="./Pagination.js"></script>
<style scoped src="./Pagination.css"></style>
