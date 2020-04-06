<template>
<div>
   <input type="text" v-model="input"/>
   {{input | reverse}}
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      input : ''
    }
  },
  filters : {
    reverse(value){
      return value.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
