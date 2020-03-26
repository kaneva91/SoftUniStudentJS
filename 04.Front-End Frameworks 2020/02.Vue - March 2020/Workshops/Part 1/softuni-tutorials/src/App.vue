<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <app-nav :technologies="tutorials.technologies" @navitate="emitedTechnologyHandler($event)"></app-nav>
      <app-create-subject
        :subjects="subjects"
        :technologies="technologies"
        @create="createHanlder($event)"
      ></app-create-subject>
      <!-- <app-main-content :subjects="subjects"></app-main-content>   -->
      <!-- <app-login></app-login> -->
      <!--   <app-register></app-register> -->
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/core/AppHeader";
import AppFooter from "./components/core/AppFooter";
import AppNav from "./components/core/AppNav";
import AppCreateSubject from "./AppCreateSubject";
//import AppLogin from "./AppLogin";
//import AppRegister from './AppRegister';
//import AppMainContent from "./components/shared/AppMainContent";

import tutorials from "../tutorials.json";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppNav,
    AppCreateSubject
    //AppMainContent
    //AppRegister
    //AppLogin
  },
  data: function() {
    return {
      tutorials,
      selectedTechnologyId: 1
    };
  },
  computed: {
    subjects() {
      return this.tutorials.technologies[this.selectedTechnologyId - 1]
        .subjects;
    },
    technologies() {
      return this.tutorials.technologies;
    }
  },
  methods: {
    emitedTechnologyHandler(id) {
      this.selectedTechnologyId = id;
    },
    createHanlder({ technologyId, subject: name, htmlContent: content }) {
      const selectedTechnology = this.tutorials.technologies.find(
        t => t.id === technologyId
      );
      selectedTechnology.subjects = selectedTechnology.subjects.concat({
        name,
        content
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
