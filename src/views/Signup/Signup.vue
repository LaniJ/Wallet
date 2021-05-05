<template>
  <Auth mainText="Create Your Account" subText="Let's get you started">
    <div class="hero-section__formContent">
      <ValidationObserver slim v-slot="{ invalid }">
        <form action @submit.prevent="register">
            <div class="first-row">
              <!-- <div class="input-block"> -->
                <div class="first-row__left">
                  <CustomInput :title="'First Name'" placeholder="John" name="First name" rules="required|alpha_spaces|min:2" />
                </div>
              <!-- </div> -->
              <!-- <div class="input-block"> -->
                <div class="first-row__left">
                  <CustomInput :title="'Last Name'" placeholder="Doe"  name="Last name" rules="required|alpha_spaces|min:2"/>
                </div>
              <!-- </div> -->
            </div>
            <div class="input-block">
              <CustomInput :title="'Email Address'" :placeholder="'johndoe@example.com'" :type="'email'" name="Email" rules="required|email" />
            </div>
            <div class="input-block">
              <CustomInput :title="'Phone Number'" :placeholder="'070 33322 9900'" :type="'tel'" name="Phone number" rules="required|numeric|min:7" />
            </div>
            <div class="input-block">
              <PasswordInput title="Password" name="Password" rules="required|alpha_dash|min:7" />
            </div>
            <CustomButton size="large" :disabled="invalid">Create Account</CustomButton>

            <!-- <button onclick="register(event)">Create Account</button> -->
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
