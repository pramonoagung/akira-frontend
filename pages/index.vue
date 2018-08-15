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
                  <i class="icon-reading"></i>
                </div>
                <h5 class="content-group">Login to Akira
                  <small class="display-block">Masuk ke Akira Dashboard</small>
                </h5>
              </div>

              <div class="form-group has-feedback has-feedback-left">
                <input type="text" class="form-control" required v-model="credentials.username" placeholder="Username">
                <div class="form-control-feedback">
                  <i class="icon-user text-muted"></i>
                </div>
              </div>

              <div class="form-group has-feedback has-feedback-left">
                <input type="password" class="form-control" required v-model="credentials.password" placeholder="Password">
                <div class="form-control-feedback">
                  <i class="icon-lock2 text-muted"></i>
                </div>
              </div>

              <div class="form-group">
                  <button type="submit" class="btn bg-info btn-block">Login
                  </button>
              </div>

              <div class="text-center">
                <a href="login_password_recover.html">Forgot password?</a>
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
      credentials: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async onLogin() {
      if (
        this.credentials.username !== null &&
        this.credentials.username !== "" &&
        this.credentials.password !== null &&
        this.credentials.password !== ""
      ) {
        const responses = await axios
          .post(
            process.env.myapi +
              '/graphql?query=mutation+Authenticate{Authenticate(input: {username:"' +
              this.credentials.username +
              '",password:"' +
              this.credentials.password +
              '"}) {token,user {id, username, nama, organizations{nama,scopes}}}}'
          )
          .then(res => {
            this.$store.commit("auth/setUser", res.data.data.Authenticate),
              this.$store.commit(
                "auth/setAuthenticated",
                res.data.data.Authenticate
              ),
              this.$router.push("/dashboard");
          })
          .catch(error => console.log(error));
      }
    }
  }
};
</script>
