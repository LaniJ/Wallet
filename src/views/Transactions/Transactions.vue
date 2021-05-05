<template>
    <div>
        <div class="Dashboardwrapper">
                <Sidenavbar />
            <div class="main-page">
                <MainHeader/>
                <div class="page-header__transactions">
                    <div>
                        <h3 class="page-header__text2">Transactions </h3>
                    </div>
                    <div class="page-header__buttons">
                        <div class="search-group__section">
                            <input class="search-group__section__input" type="text" placeholder="Search by name">
                            <img src="@/assets/search-icon.svg" alt="filter icon">
                        </div>
                        <CustomButton size="large" color="light" @click="toggleFilterModal">
                            <span class="filter-button__text">
                                Filter
                            </span>
                            <img src="@/assets/filter.svg" alt="filter icon">
                        </CustomButton>
                    </div>
                </div>
                <TransactionTable :transactions="paginatedTransactions" />
                <Pagination :totalPages="totalPages" :perPage="perPage" @changePage="changeCurrentPage" :currentPage="currentPage"/>
            </div>
        </div>
        <Modal modalName="Filter" :class="{open: filter}" @close="toggleFilterModal">
            <div class="modal__filter__body">
                    <form action=""  @submit.prevent="">
                        <div class="form">
                            <label class="form-label" for="transaction">Transaction Type</label><br>
                            <select class="form-select" name="transaction" id="transaction">
                            <option value="transfer">Wallet Transfer</option>
                            <option value="deposit">Wallet Deposit</option>
                            </select>
                            <br>

                            <div class="date-section">
                                <div class="date-group">
                                    <label class="date-group__label" for="">Start Date</label> <br>
                                    <div class="date-group__section">
                                        <input class="date-group__section__input" type="tel" id="startDate"
                                        placeholder="20-02-2021">
                                        <img src="@/assets/calendar.svg" alt="calendar icon">
                                    </div>
                                </div>
                                <div class="date-group">
                                    <label class="date-group__label" for="">Start Date</label> <br>
                                    <div class="date-group__section">
                                        <input class="date-group__section__input" type="tel" id="endDate"
                                        placeholder="20-02-2021">
                                        <img src="@/assets/calendar.svg" alt="calendar icon">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>Transaction Status</h3>
                                <RadioBtn id="transactionStatus"
                                :options="transactionStatus"
                                name="transaction-status"
                                v-model="status"/>
                            </div>
                            <CustomButton size="large">Apply Search</CustomButton>
                        </div>
                    </form>
                </div>
        </Modal>
    </div>
</template>

<script src="./Transactions.js"></script>
<style scoped src="./Transactions.css"></style>
