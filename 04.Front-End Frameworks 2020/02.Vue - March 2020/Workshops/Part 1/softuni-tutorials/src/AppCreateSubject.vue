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
      <div class="form-group">
        <input v-model="subject" placeholder="Technology subject..." type="text" id="subject" />
      </div>
      <vue-editor v-model="htmlContent" />
      <select name="technologies" id="technologies" v-model="technologyId">
        <option :value="null" selected>Select a technology...</option>
        <option
          v-for="technology in technologies"
          :key="technology.id"
          :value="technology.id"
        >{{technology.name}}</option>
      </select>
      <button @click="createSubjectHandler()" class="btn">Create</button>
      <h3>Content preview</h3>
      <div class="content-preview"></div>
    </section>
  </div>
</template>

<script>
import AppMainContentSide from "./AppMainContentSide";
import { VueEditor } from "vue2-editor";
export default {
  name: "AppCreateSubject",
  components: {
    AppMainContentSide,
    VueEditor
  },
  data: function() {
    return {
      selectedSubjectIndex: -1,
      currentContent: "",
      htmlContent: "",
      subject: "",
      technologyId: null
    };
  },
  props: {
    subjects: {
      type: Array,
      required: true
    },
    technologies: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectedSubject(content, index) {
      this.selectedSubjectIndex = index;
      this.currentContent = content;
    },
    createSubjectHandler() {
      const { technologyId, subject, htmlContent } = this.$data;
      this.$emit("create", { technologyId, subject, htmlContent });
      this.technologyId = null;
      this.subject = "";
      this.htmlContent = "";
    }
  }
};
</script>

<style scoped>
.main-content {
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

/* Create Styles */
.btn {
  padding: 1%;
  background: #44a9f8;
  color: white;
  border: none;
  width: 10%;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid white;
  display: block;
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 1%;
}

.btn:hover {
  color: #44a9f8;
  background: white;
  border: 1px solid #44a9f8;
  text-decoration: underline;
}

div.form-group {
  margin-top: 1%;
  margin-bottom: 1%;
}

div.form-group input,
option,
select {
  font-size: 18px;
  padding: 1%;
  width: 25%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  text-align-last: center;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.content-preview {
  text-align: left;
  word-wrap: break-word;
  display: block;
  width: 100%;
}
</style>