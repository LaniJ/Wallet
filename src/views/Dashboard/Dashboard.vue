<template>
<div>
    <div class="Dashboardwrapper">
        <div class="overlay" @click="toggleSideNav" v-if="sideNavActive"></div>
            <Sidenavbar :show="sideNavActive" @close="toggleSideNav"/>
        <div class="main-page">
            <div class="flex">
                <div id="navigation-icon">
                    <span @click="toggleSideNav">&#9776;</span>
                </div>
                <MainHeader />
            </div>
            <div class="page-header__bottomContent">
                <div>
                    <h3 class="page-header__text2">Hello {{ currentUser.username }} 👋🏿 </h3>
                </div>
                <div class="page-header__buttons">
                    <CustomButton :color="'blue-outline'" class="gap" @click="toggleTransferModal">Transfer Funds</CustomButton>
                    <CustomButton @click="toggleFundModal">
                        <span class="addBtn">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11V5H8V11H14V13H8V19H6V13H0V11H6Z"/>
                            </svg>
                        </span>
                        Fund Wallet
                    </CustomButton>
                </div>
            </div>
            <section class="balance-section">
                <div class="balance-section__naira">
                    <h3>₦ {{ nairaBalance }}.00 </h3>
                    <small class="balance-type">Naira Balance</small>
                </div>
                <div class="balance-section__naira">
                    <h3>$00.00</h3>
                    <small class="balance-type">Dollar Balance</small>
                </div>
            </section>
            <div class="table-section" v-if="transactionExists">
                <h3>Recent Transactions</h3>
                <!-- here -->
                <TransactionTable :transactions="dashboardTransactions"/>
            </div>
            <div v-else class="transaction-section">
                <h3>Transaction History</h3>
                <div class="table-section__empty">
                    <div class="table-section__empty__image" >
                        <img src="@/assets/folder.svg" alt="">
                    </div>
                    <h3>No Transactions</h3>
                </div>
            </div>
        </div>
    </div>
    <Modal modalName="Transfer" :class="{open: isActive}" @close="toggleTransferModal">
        <div class="modal__transfer__body">
                <h3>Select Wallet Type to Transfer From</h3>

                <RadioBtn id="currencyChoice"
                :options="transactionType"
                name="transactionType"
                v-model="currencyOption"/>
                <div>
                    <form action="" @submit.prevent="">
                        <div class="form">
                            <CustomInput
                                title="Recipient's Username"
                                placeholder="Jane Doe"
                                type="text"
                                @blur="validateRecipient"
                                v-model="form.recipientUsername"
                            />
                            <CustomInput
                                title="Amount"
                                placeholder="₦ 00.00"
                                type="tel"
                                v-model="form.amount"
                            />
                            <CustomInput
                                title="Pin"
                                placeholder="****"
                                type="password"
                                v-model="form.pin"
                            />
                            <CustomButton
                                size="large"
                                class="btn-media">
                                Transfer
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
    </Modal>
    <Modal modalName="Fund Wallet" :class="{open: fundActive}" @close="toggleFundModal">
         <div class="modal__fund__body">
                <h3>Select Wallet Type</h3>

                <RadioBtn id="currencyType"
                :options="transactionType"
                name="transactionCurrency"
                v-model="currencyOption"/>
                <div>
                    <form action="" @submit.prevent="addToWallet">
                        <div class="form">
                            <CustomInput
                                title="Amount"
                                placeholder="₦ 00.00"
                                type="tel"
                                v-model="form.amount" />

                            <CustomButton
                                size="large"
                                class="btn-media">
                                    <Loader v-if="isLoading"/>
                                    <span v-else>Fund Wallet</span>
                            </CustomButton>

                            <small class="invalid"> {{ errorMsg }}</small>
                        </div>
                    </form>
                </div>
            </div>
    </Modal>
</div>
</template>

<script src="./Dashboard.js"></script>
<style scoped src="./Dashboard.css"></style>
