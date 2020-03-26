<template>
 <div class="main-content">
  <AppMainContentSide>
    <template slot="side-content">
      <li
        v-for="(subject, index) in subjects"
        :key="index"
        :class="{active : index===selectedSubjectIndex}"
      >
        <a href="#" @click="selectedSubject(subject.content, index)">{{subject.name}}</a>
      </li>
    </template>
  </AppMainContentSide>
    <section class="content-info">
      <p v-if="currentContent">{{currentContent}}</p>
    </section>
 </div>
</template>

<script>
import AppMainContentSide from "../../AppMainContentSide";
export default {
  name: "AppMainContent",
  components: {
    AppMainContentSide
  },
  data: function() {
    return {
      selectedSubjectIndex: -1,
      currentContent: ""
    };
  },
  props: {
    subjects: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectedSubject(content, index) {
      this.selectedSubjectIndex = index;
      this.currentContent = content;
    }
  }
};
</script>

<style scoped>
.main-content{
  display: flex;
}

 .content-info {
  width: 80%;
  padding: 1%;
  font-size: 18px;
  display: block;
}

 .content-info .user-form input {
  padding: 1%;
  width: 25%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-family: inherit;
}

 .content-info .user-form input:focus {
  background: rgb(255, 248, 198);
}

 .content-info .user-form .form-group {
  margin-bottom: 1%;
}

 .content-info .user-form .form-group img {
  vertical-align: bottom;
}

 .content-info .user-form button {
  padding: 1%;
  background: #44a9f8;
  color: white;
  border: none;
  width: 10%;
  font-size: 16px;
  cursor: pointer;
}

 .content-info .user-links a {
  color: black;
  text-decoration: none;
  font-weight: normal;
  margin: 2%;
}

 .content-info .user-links a:hover {
  color: #44a9f8;
  text-decoration: underline;
}

 .content-info .user-links .active-route {
  color: #44a9f8;
  text-decoration: underline;
}
</style>