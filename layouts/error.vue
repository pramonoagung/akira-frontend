<template>
<div class="__nuxt-error-page">
<div class="error">
    <h1>Oops! Halaman tidak ditemukan</h1>
  <p class="description" v-if="statusCode === 404">
    <nuxt-link class="error-link" to="/">Kembali ke beranda</nuxt-link>
  </p>

</div>
</div>
</template>

<script>
export default {
  name: "nuxt-error",
  props: ["error"],
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Raleway:100,600"
        }
      ]
    };
  },
  data() {
    return {
      mounted: false
    };
  },
  mounted() {
    this.mounted = true;
  },
  created() {
    console.error(this.error);
  },
  watch: {
    error(newErr) {
      if (newErr) {
        console.error(newErr);
      }
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || "{{messages.client_error}}";
    }
  }
};
</script>

<style scoped>
.__nuxt-error-page {
  padding: 1rem;
  background: #f7f8fb;
  color: #47494e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.__nuxt-error-page .error {
  max-width: 450px;
}
.__nuxt-error-page .title {
  font-size: 1.5rem;
  margin-top: 15px;
  color: #47494e;
  margin-bottom: 8px;
}
.__nuxt-error-page .description {
  color: #7f828b;
  line-height: 21px;
  margin-bottom: 10px;
}
.__nuxt-error-page a {
  color: #7f828b !important;
  text-decoration: none;
}
.__nuxt-error-page .logo {
  position: fixed;
  left: 12px;
  bottom: 12px;
}
</style>