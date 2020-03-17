<template>
  <div>
    <h1 @mouseover="showTheTime" @mouseleave="hideTheTime">
      The time is... ?
      <span>(hover)</span>
    </h1>
    <p v-show="isDateHidden">{{date}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      isDateHidden: false,
      date: ''
    };
  },

  methods: {
    showTheTime() {
      this.isDateHidden = true;
      setInterval(() => {
        this.date = new Date();
      }, 1000);
    },
    hideTheTime() {
      this.isDateHidden = false;
    }
  }
};
</script>


<style scoped>
h1 {
  margin-top: 200px;
}
span {
  font-style: italic;
  font-size: 20px;
}
</style>
