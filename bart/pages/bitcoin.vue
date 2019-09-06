<template>
  <div class="full">
    <!-- Only attempt to load the elements if the API is ready.. -->
    <div v-if="loading == false">
      <h1 class="text-center">Bitcoin Prices</h1>
      <p class="text-center">Updated: {{time.updateduk}}</p>
      <div class="text-center">
        <h3 class="mt-5">1 Bitcoin is Worth..</h3>
        <!-- For every currency in the API response, create a card for it's information, using CurrencyCard component -->
        <div class="space" v-for="item in info" v-bind:key="item.code">
          <CurrencyCard :code="item.code" :description="item.description" :rate="item.rate_float"></CurrencyCard>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

//For some reason I have to import axios here, even though I installed it already with Yarn
import axios from 'axios';
import CurrencyCard from '../components/CurrencyCard';

export default {
  components: {
    CurrencyCard
  },
  data () {
    return {
      info: null,
      time: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      //Coindesk API
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        //Saving data under two different objects for readability
        this.info = response.data.bpi
        this.time = response.data.time
      })
      .catch(error => {
        console.error(error)
        this.errored = true 
      })
      .finally(() => this.loading = false)
  }
}

</script>

<style>
.full {
  min-height: 20vh;
}

.space {
  margin: 2rem;
}
</style>
