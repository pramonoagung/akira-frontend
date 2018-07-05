<template>
    <div>
        <h3>Voucher id : {{$route.params.id}}</h3> 
        <p>Voucher Foo : {{voucher}}</p>
    </div>
</template>
<script>
export default {
  data() {
    voucher: false;
  },
  validate(params) {
    console.log(params.id);
    return true;
  }
};
</script>
