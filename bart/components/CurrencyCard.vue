// A componenet card for each currency with Prop validation

<template>
  <div class="mb-2 p-1 d-flex justify-content-center">
    <!-- <h2>{{code}}</h2>
    <h4>{{description}}</h4>
    <h5>{{rate}}</h5> -->
    <div class="card text-white bg-primary" style="max-width: 18rem;">
      <div class="card-header">{{code}}</div>
        <div class="card-body">
          <h5 class="card-title">{{description}}</h5>
          <p class="card-text">{{rate}}</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      code: String,
      description: String,
      rate: Number
    }
  }
</script>

<style>

</style>
