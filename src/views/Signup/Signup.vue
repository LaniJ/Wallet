<template>
  <Auth mainText="Create Your Account" subText="Let's get you started">
    <div class="hero-section__formContent">
      <ValidationObserver slim v-slot="{ invalid }">
        <form action @submit.prevent="register">
            <div class="first-row">
              <!-- <div class="input-block"> -->
                <div class="first-row__left">
                  <CustomInput
                    :title="'First Name'"
                    placeholder="John"
                    name="First name"
                    rules="required|alpha_spaces|min:2"
                    v-model="form.firstName"
                  />
                </div>
              <!-- </div> -->
              <!-- <div class="input-block"> -->
                <div class="first-row__left">
                  <CustomInput
                    :title="'Last Name'"
                    placeholder="Doe"
                    name="Last name"
                    rules="required|alpha_spaces|min:2"
                    v-model="form.lastName"
                  />
                </div>
              <!-- </div> -->
            </div>
            <div class="input-block">
              <CustomInput
              :title="'Email Address'"
              :placeholder="'johndoe@example.com'"
              :type="'email'"
              name="Email"
              rules="required|email"
              v-model="form.email"
              />
            </div>
            <div class="input-block">
              <CustomInput
                title="Phone Number"
                placeholder="070 33322 9900"
                type="number"
                name="Phone number"
                rules="required|numeric|min:7"
                v-model="form.phoneNumber"
              />
            </div>

            <div class="first-row">
                <div class="first-row__left">
                  <CustomInput
                    title="Username"
                    placeholder="JohnD"
                    name="Username"
                    rules="required|alpha_num|min:7|username_check"
                    v-model="form.username"
                  />
                </div>
                <div class="first-row__left">
                  <CustomInput
                    title="Date"
                    type="date"
                    name="Date"
                    placeholder="02/02/12"
                    rules="required"
                    v-model="form.dob"
                  />
                </div>
            </div>

            <div class="input-block">
              <PasswordInput
                title="Password"
                name="Password"
                rules="required|alpha_dash|min:7"
                v-model="form.password"
              />
            </div>
            <CustomButton size="large" :disabled="invalid" >
              <Loader v-if="isLoading"/>
              <span v-else>Create Account</span>
            </CustomButton>
            <small class="invalid"> {{ errorMsg }}</small>
        </form>
      </ValidationObserver>
    </div>
    <div class="sign-in">
    Already have an account?
    <router-link to="/login" exact>Sign In</router-link>
    <!-- <a href="login.html">Sign In</a> -->
    </div>
  </Auth>
</template>

<script src="./Signup.js"></script>
<style scoped src="./Signup.css"></style>
