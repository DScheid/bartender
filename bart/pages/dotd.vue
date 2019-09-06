// Drink of the Day! Random Cocktail recipes

<template>
  <div class="text-center mt-5">
    <!-- Button when clicked, new cocktail loaded with the getDrink method below -->
    <button class=mb-4 v-on:click="getDrink">New Drink</button>
    <!-- Only load if API data is ready.. -->
    <div v-if="loading == false">
      <h1 class="mb-4">{{info.strDrink}}</h1>
      <img :src="info.strDrinkThumb" class="mb-4">
      <h3>Instructions</h3>
      <p>{{info.strInstructions}}</p>
      <h3 class="mb-4">Ingredients</h3>
      <p>{{info.strMeasure1}}  {{info.strIngredient1}}</p>
      <p>{{info.strMeasure2}}  {{info.strIngredient2}}</p>
      <p>{{info.strMeasure3}}  {{info.strIngredient3}}</p>
      <p>{{info.strMeasure4}}  {{info.strIngredient4}}</p>
      <p>{{info.strMeasure5}}  {{info.strIngredient5}}</p>
      <p>{{info.strMeasure6}}  {{info.strIngredient6}}</p>
      <p>{{info.strMeasure7}}  {{info.strIngredient7}}</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    //Calls getDrink menu to render drink as soon as the app is ready.
    this.getDrink();
  },
  methods: {
    // Broken off into a method because it is called in multiple scenarios
    getDrink: function () {
      this.loading = true;
      //Cocktail DB API endpoint for random drink
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php?a=alcoholic')
      .then((response)  =>  {
        this.loading = false;
        //Specify the part of the object I care about immediately for ease in the template
        this.info = response.data.drinks[0];
      }, (error)  =>  {
        // To know when we can render the components
        this.loading = false;
      })
    }
  }
}
</script>

<style>
  .limited-width {
    width: 70%;
    text-align: center;
  }

  img {
    width: 40%;
  }
</style>
