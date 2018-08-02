<template>
  <div>
    <Navbar />
    <nuxt/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  middleware: "admin",
  components: {
    Navbar
  }
};
</script>