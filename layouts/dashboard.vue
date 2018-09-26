<template>
  <div>
    <Navbar />
    <nuxt/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  middleware: ["check-auth", "auth"],
  components: {
    Navbar
  }
};
</script>