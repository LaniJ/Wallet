<template>
    <div class="modal" id="fund-modal">
        <div class="modal__fund">
            <div class="modal__fund__header">
                <h2>{{ modalName}}</h2>
                <button class="modalBtn" @click="$emit('close')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9997 10.5862L16.9497 5.63623L18.3637 7.05023L13.4137 12.0002L18.3637 16.9502L16.9497 18.3642L11.9997 13.4142L7.04974 18.3642L5.63574 16.9502L10.5857 12.0002L5.63574 7.05023L7.04974 5.63623L11.9997 10.5862Z" fill="#3A434B"/>
                    </svg>
                </button>
            </div>
            <slot />
            <!-- <div class="modal__fund__body">
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
            </div> -->
        </div>
    </div>
</template>
<script src="./Modal.js"></script>
<style scoped src="./Modal.css"></style>
