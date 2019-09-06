<template>
  <div class="full">
    <div class="container">
      <h1>{{info}}</h1>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}

</script>

<style>
.full {
  min-height: 100vh;
}

.container {
  margin: 0 auto;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
