<template>
    <div>
        <div class="Dashboardwrapper">
            <!-- <div> -->
                <Sidenavbar />
            <!-- </div> -->
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
                        <!-- <button>hello</button> -->
                        <!-- <CustomButton size="large">Apply Search</CustomButton> -->
                        <CustomButton size="large" color="light" @click="toggleFilterModal">
                            <span class="filter-button__text">
                                Filter
                            </span>
                            <img src="@/assets/filter.svg" alt="filter icon">
                        </CustomButton>
                    </div>
                </div>
                <TransactionTable />
                <!-- <section class="footer">
                    <div class="currentPage">
                        <h3 class="footer-text">Showing Page 1 of 10</h3>
                    </div>
                    <div class="allPages">
                        <button class="gap footer-text" href="">Prev</button>
                        <button class="footer-text">1</button>
                        <button class="footer-text">2</button>
                        <button class="footer-text">3</button>
                        <h3 class="ellipsis">...</h3>
                        <button class="footer-text">10</button>
                        <button class="footer-text" href="">Next</button>
                    </div>
                </section> -->
                <Pagination />
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
                                        <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.09277 9.40445H20.9167" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.442 13.3097H16.4512" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0045 13.3097H12.0137" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.55818 13.3097H7.56744" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.442 17.1964H16.4512" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0045 17.1964H12.0137" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.55818 17.1964H7.56744" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.0433 2V5.29078" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.96515 2V5.29078" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> -->
                                    </div>
                                </div>
                                <div class="date-group">
                                    <label class="date-group__label" for="">Start Date</label> <br>
                                    <div class="date-group__section">
                                        <input class="date-group__section__input" type="tel" id="endDate"
                                        placeholder="20-02-2021">
                                        <img src="@/assets/calendar.svg" alt="calendar icon">
                                        <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.09277 9.40445H20.9167" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.442 13.3097H16.4512" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0045 13.3097H12.0137" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.55818 13.3097H7.56744" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.442 17.1964H16.4512" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0045 17.1964H12.0137" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.55818 17.1964H7.56744" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.0433 2V5.29078" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.96515 2V5.29078" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> -->
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>Transaction Status</h3>
                                <div class="status">
                                    <div class="status-type">
                                        <RadioBtn title="Successful" id="successful" value="successful" name="transaction-status"  />
                                    </div>
                                    <div  class="status-type">
                                        <RadioBtn title="Failed" id="failed" value="failed" name="transaction-status"  />
                                    </div>
                                </div>
                            </div>
                            <CustomButton size="large">Apply Search</CustomButton>
                        </div>
                    </form>
                </div>
        </Modal>
        <!-- <section class="modal" :class="{open: filter}" id="filter-modal">
            <div class="modal__filter">
                <div class="modal__filter__header">
                    <h2>Filter</h2>
                    <button class="modalBtn" @click="toggleFilterModal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9997 10.5862L16.9497 5.63623L18.3637 7.05023L13.4137 12.0002L18.3637 16.9502L16.9497 18.3642L11.9997 13.4142L7.04974 18.3642L5.63574 16.9502L10.5857 12.0002L5.63574 7.05023L7.04974 5.63623L11.9997 10.5862Z" fill="#3A434B"/>
                        </svg>
                    </button>
                </div>
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
                                        <input class="date-group__section__input" type="number" id="startDate"
                                        placeholder="20-02-2021">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.09277 9.40445H20.9167" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.442 13.3097H16.4512" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0045 13.3097H12.0137" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.55818 13.3097H7.56744" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.442 17.1964H16.4512" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0045 17.1964H12.0137" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.55818 17.1964H7.56744" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.0433 2V5.29078" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.96515 2V5.29078" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="date-group">
                                    <label class="date-group__label" for="">Start Date</label> <br>
                                    <div class="date-group__section">
                                        <input class="date-group__section__input" type="number" id="endDate"
                                        placeholder="20-02-2021">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.09277 9.40445H20.9167" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.442 13.3097H16.4512" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0045 13.3097H12.0137" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.55818 13.3097H7.56744" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.442 17.1964H16.4512" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0045 17.1964H12.0137" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.55818 17.1964H7.56744" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.0433 2V5.29078" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.96515 2V5.29078" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="#3A434B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>Transaction Status</h3>
                                <div class="status">
                                    <div class="status-type">
                                        <RadioBtn title="Successful" id="successful" value="successful" name="transaction-status"  />
                                    </div>
                                    <div  class="status-type">
                                        <RadioBtn title="Failed" id="failed" value="failed" name="transaction-status"  />
                                    </div>
                                </div>
                            </div>
                            <CustomButton size="large">Apply Search</CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script src="./Transactions.js"></script>
<style scoped src="./Transactions.css"></style>
