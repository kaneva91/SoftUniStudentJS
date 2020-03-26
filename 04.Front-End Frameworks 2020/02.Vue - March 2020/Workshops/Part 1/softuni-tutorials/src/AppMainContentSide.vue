<template>
  <aside class="content-navigation">
    <ul>
      <slot name="side-content"></slot>
    </ul>
  </aside>
</template>


<script>
export default {
  name: "AppMainContentSide"
};
</script>


<style scoped>
 div.main-content .content-navigation {
  width: 20%;
  border-right: 3px solid whitesmoke;
  border-left: 3px solid whitesmoke;
}

 div.main-content .subject-info {
  padding: 1%;
}

 div.main-content .subject-info p {
  font-size: 18px;
}

 .main-content .content-navigation ul {
  margin: 0;
  padding: 0;
}

 div.main-content .content-navigation ul li {
  list-style-type: none;
  padding: 10%;
  font-size: 23px;
  cursor: pointer;
  text-align: left;
}

 div.main-content .content-navigation ul li:hover {
  background: whitesmoke;
}

 div.main-content .content-navigation ul li:active {
  border-right: 5px solid #44a9f8;
}

 div.main-content .content-navigation ul li.active {
  border-right: 5px solid #44a9f8;
}

 div.main-content .content-navigation ul li a {
  color: black;
  text-decoration: none;
}
</style>