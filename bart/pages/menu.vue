// A Search function for ingredients you might not be familiar with

<template>
  <div class='p-5'> 
    <h3 class="mb-0">Search For Ingredients</h3>
    <small class='mb-5'>Vodka, Whiskey, lemon, lime, etc.</small><br><br>
    <!-- Vue's method for handling user input is v-model -->
    <input v-model="search" placeholder="vodka / gin / etc.">
    <!-- Once a user has filled in the search bar, the submit button calls the fetch method getIngredient -->
    <button v-on:click="getIngredient()" class='mb-4'>Submit</button>
    <div v-if="loading == false">
      <p>{{info}}</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data () {
    return {
      //Starting the user off with a search that works
      search: 'gin',
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    this.getIngredient();
  },
  methods: {
    getIngredient: function() {
      this.loading = true;
      //Building string to search the API with, 'search' is updated by the user with V-model
      let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + this.search;
      axios.get(url)
      .then((response)  =>  {
        this.loading = false;
        try {
          this.info = response.data.ingredients[0].strDescription;
        }
        catch(err) {
          //Alerting the user that the ingredient is not in the DB
          alert("Cannot find your requested ingredient")
        }
      }, (error)  =>  {
        this.loading = false;
      })
    }
  }
}

</script>

<style>

</style>
