<template>
<div>
    <div class="Dashboardwrapper">
        <!-- <div> -->
            <Sidenavbar />
        <!-- </div> -->
        <div class="main-page">
            <MainHeader/>
            <div class="page-header__bottomContent">
                <div>
                    <h3 class="page-header__text2">Hello John 👋🏿 </h3>
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
                    <h3>₦00.00</h3>
                    <small class="balance-type">Naira Balance</small>
                </div>
                <div class="balance-section__naira">
                    <h3>$00.00</h3>
                    <small class="balance-type">Dollar Balance</small>
                </div>
            </section>
            <div class="table-section">
                <h3>Recent Transactions</h3>
                <TransactionTable />
            </div>
        </div>
    </div>
    <Modal modalName="Transfer" :class="{open: isActive}" @close="toggleTransferModal">
        <div class="modal__transfer__body">
                <h3>Select Wallet Type to Transfer From</h3>
                <div class="currency">
                    <div class="currency-type">
                        <RadioBtn title="Naira" id="naira" value="naira" name="currency"  />
                        <br>
                    </div>
                    <div  class="currency-type">
                        <RadioBtn title="Dollar" id="dollar" value="dollar" name="currency"  />
                        <br>
                    </div>
                </div>
                <div>
                    <form action="" @submit.prevent="">
                        <div class="form">
                            <CustomInput :title="'Account Number'" :placeholder="'23456788901'" :type="'tel'" />
                            <CustomInput :title="'Amount'" :placeholder="'₦ 00.00'" :type="'tel'" />
                            <CustomButton size="large">Transfer</CustomButton>
                        </div>
                    </form>
                </div>
            </div>
    </Modal>
    <Modal modalName="Fund Wallet" :class="{open: fundActive}" @close="toggleFundModal">
         <div class="modal__fund__body">
                <h3>Select Wallet Type</h3>
                <div class="currency">
                    <div class="currency-type">
                        <RadioBtn title="Naira" id="fundnaira" value="naira" name="fundCurrency"  />
                        <br>
                    </div>
                    <div  class="currency-type">
                        <RadioBtn title="Dollar" id="funddollar" value="dollar" name="fundCurrency"  />
                        <br>
                    </div>
                </div>
                <div>
                    <form action="" @submit.prevent="">
                        <div class="form">
                            <CustomInput title="Amount" placeholder="₦ 00.00" type="tel" />
                            <CustomButton size="large">Fund Wallet</CustomButton>
                        </div>
                    </form>
                </div>
            </div>
    </Modal>
    <!-- <section class="modal" :class="{open: isActive}" id="transfer-modal">
        <div class="modal__transfer">
            <div class="modal__transfer__header">
                <h2>Transfer</h2>
                <button class="modalBtn" @click="toggleTransferModal" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9997 10.5862L16.9497 5.63623L18.3637 7.05023L13.4137 12.0002L18.3637 16.9502L16.9497 18.3642L11.9997 13.4142L7.04974 18.3642L5.63574 16.9502L10.5857 12.0002L5.63574 7.05023L7.04974 5.63623L11.9997 10.5862Z" fill="#3A434B"/>
                    </svg>
                </button>
            </div>
            <div class="modal__transfer__body">
                <h3>Select Wallet Type to Transfer From</h3>
                <div class="currency">
                    <div class="currency-type">
                        <RadioBtn title="Naira" id="naira" value="naira" name="currency"  />
                        <br>
                    </div>
                    <div  class="currency-type">
                        <RadioBtn title="Dollar" id="dollar" value="dollar" name="currency"  />
                        <br>
                    </div>
                </div>
                <div>
                    <form action="" @submit.prevent="">
                        <div class="form">
                            <CustomInput :title="'Account Number'" :placeholder="'23456788901'" :type="'tel'" />
                            <CustomInput :title="'Amount'" :placeholder="'₦ 00.00'" :type="'tel'" />
                            <CustomButton size="large">Transfer</CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> -->
    <!-- <section class="modal" :class="{open: fundActive}" id="fund-modal">
        <div class="modal__fund">
            <div class="modal__fund__header">
                <h2>Fund Wallet</h2>
                <button class="modalBtn" @click="toggleFundModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9997 10.5862L16.9497 5.63623L18.3637 7.05023L13.4137 12.0002L18.3637 16.9502L16.9497 18.3642L11.9997 13.4142L7.04974 18.3642L5.63574 16.9502L10.5857 12.0002L5.63574 7.05023L7.04974 5.63623L11.9997 10.5862Z" fill="#3A434B"/>
                    </svg>
                </button>
            </div>
            <div class="modal__fund__body">
                <h3>Select Wallet Type</h3>
                <div class="currency">
                    <div class="currency-type">
                        <RadioBtn title="Naira" id="fundnaira" value="naira" name="fundCurrency"  />
                        <br>
                    </div>
                    <div  class="currency-type">
                        <RadioBtn title="Dollar" id="funddollar" value="dollar" name="fundCurrency"  />
                        <br>
                    </div>
                </div>
                <div>
                    <form action="" @submit.prevent="">
                        <div class="form">
                            <CustomInput :title="'Amount'" :placeholder="'₦ 00.00'" :type="'tel'" />
                            <CustomButton size="large">Fund Wallet</CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> -->
</div>
</template>

<script src="./Dashboard.js"></script>
<style scoped src="./Dashboard.css"></style>
