<template>
  <div class="div">This is {{test}}...</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
     test :"component!!!"
    }
  }
}
</script>


<style>
.div{
  color: red;
}

</style>