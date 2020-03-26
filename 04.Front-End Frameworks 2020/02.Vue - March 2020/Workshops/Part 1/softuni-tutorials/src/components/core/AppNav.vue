<template>
  <div class="navigation">
    <ul>
      <li v-for="(technology) in technologies" :key="technology.id">
        <a :class="{active : technology.id == selectedId}" @click="selectTechnologyHandler(technology.id)" href="#">{{technology.name}}</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="#" >SUBJECT [+]</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppNav",
  data: function(){
    return {
    
      selectedId : ""
    }
  },
  props: {
      technologies : {
          type : Array,
          required : true
      },
  
  },
  methods : {
      selectTechnologyHandler(id){
        this.selectedId = id;
          this.$emit('navitate', id);
      }
  }
};
</script>

<style scoped>
div.navigation {
  background: #44a9f8;
  font-size: 20px;
  text-align: left;
  display: flex;
}

div.navigation ul {
  display: inline-block;
  text-align: left;
}

div.navigation ul:nth-child(1) {
  width: 75%;
}

div.navigation ul:nth-child(2) {
  width: 20%;
  text-align: right;
}

div.navigation li {
  list-style: none;
  display: inline-block;
  margin-right: 3%;
}

div.navigation ul:nth-child(2) li {
  width: 100%;
}

div.navigation li a {
  padding: 1%;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

div.navigation li a:hover{
  text-decoration: underline;
}

div.navigation li a.active{
  text-decoration: underline;
}

div.-content {
  display: flex;
}
</style>

