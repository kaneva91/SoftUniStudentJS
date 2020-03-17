<template>
  <div class="wrapper">
    <ul>
      <li v-for="(product, index) of products" v-bind:key="index" :class="oddOrEven(index)">
        {{product}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data: function() {
    return {
      products: ["Cucumber", "Grape", "Carrot", "Banana", "Patato", "Apple"]
    };
  },
  methods : {
    oddOrEven : function(index){
      return index % 2 === 0 ? 'odd' : 'even';
    }
  }
};
</script>
 

<style scoped>
ul {
  list-style-type: none;
  font-size: 18px;
}
li {
  border: 2px solid black;
  padding: 5px;
  width: 20%;
  margin: 6px auto;
}
.odd{
  background: yellow;
  font-style: italic;
}
.even{
  background: cyan;
  border: 2px solid red;
}
</style>
