<template>
  <div class="login-container">
    <!-- Page container -->
    <div class="page-container">

      <!-- Page content -->
      <div class="page-content">

        <!-- Main content -->
        <div class="content-wrapper">

          <!-- Simple login form -->
          <form @submit.prevent="onLogin">
            <div class="panel panel-body login-form">
              <div class="text-center">
                <div class="icon-object border-slate-300 text-slate-300">
                  <img src="/images/akira-logo.png" style="width:70px; height:70px" />
                </div>
                <h5 class="content-group">Login to Akira
                  <small class="display-block">Masuk ke Akira Dashboard</small>
                </h5>
              </div>

              <div class="form-group has-feedback has-feedback-left">
                <input type="text" class="form-control" required v-model="username" placeholder="Username">
                <div class="form-control-feedback">
                  <i class="icon-user text-muted"></i>
                </div>
              </div>

              <div class="form-group has-feedback has-feedback-left">
                <input type="password" class="form-control" required v-model="password" placeholder="Password">
                <div class="form-control-feedback">
                  <i class="icon-lock2 text-muted"></i>
                </div>
              </div>

              <div class="form-group">
                  <button type="submit" class="btn bg-info btn-block">Login
                  </button>
              </div>

            </div>
          </form>
          <!-- /simple login form -->

        </div>
        <!-- /main content -->

      </div>
      <!-- /page content -->

    </div>
    <!-- /page container -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isLogin: true,
      username: "",
      password: ""
    };
  },
  methods: {
    onLogin() {
      if (
        this.username !== null &&
        this.username !== "" &&
        this.password !== null &&
        this.password !== ""
      ) {
        this.$store
          .dispatch("authenticateUser", {
            isLogin: this.isLogin,
            username: this.username,
            password: this.password
          })
          .then(() => {
            this.$router.push("/dashboard");
          });
      }
    }
  }
};
</script>
