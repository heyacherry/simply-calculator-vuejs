<template>
  <div id="calculator">
    <header>
      <h1>Calculator</h1>
      <span class="author">BY <a href="https://www.freecodecamp.com/caiyiliang" target="_blank">CaiYiLiang</a></span>
    </header>
    <section class="calculator" id="calculator">
      <calculator-content></calculator-content>
    </section>
  </div>
</template>

<script>
import CalculatorContent from 'components/CalculatorContent.vue'
export default {
  name: 'calculator',
  components: {
    CalculatorContent
  }
 }

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Pacifico');


html{
   font-size:62.5%;  /* =10px */
}

body{
  background-color:#f4f1f1; /* HEX */
}


header{
  font-size: 1.8rem;
  font-family: 'Pacifico', cursive;
}

header .author{
  font-size: 1.5rem;
}

header .author a{
  text-decoration: none;
}

header , .calculator {
  margin: 2.5rem auto;
  text-align: center;
}

.calculator{
  border: 0.8rem solid #f67373;
  width: 34rem;
  height: 40rem;
  background-color: #f28080;
  font-size: 1.6rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  border-radius: 1rem;: 
  -webkit-box-shadow: 1rem 1rem 0.5rem #ccc;
  box-shadow: 1rem 1rem 0.5rem #ccc;
  
}


</style>
