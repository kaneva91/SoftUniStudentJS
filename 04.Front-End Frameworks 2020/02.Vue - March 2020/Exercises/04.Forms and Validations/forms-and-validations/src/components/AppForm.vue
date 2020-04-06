<template>
  <div class="container d-flex pt-5">
    <form class="flex-fill">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Registration</h1>
          <hr />
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="email"
              @blur="$v.email.$touch"
            />
            <template v-if="$v.email.$error">
              <div v-if="!$v.email.required">Email is required!</div>
              <div v-else-if="!$v.email.email">Invalid email!</div>
            </template>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-control"
              @blur="$v.password.$touch"
            />
            <template v-if="$v.password.$error">
              <div v-if="!$v.password.required">password is required!</div>
              <div v-else-if="!$v.password.email">Password must be at least 6 symbols long!</div>
            </template>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input v-model="age" type="number" id="age" class="form-control" @blur="$v.age.$touch" />
          </div>
          <template v-if="$v.age.$error">
            <div v-if="!$v.age.required">Age is required!</div>
            <div v-else-if="!$v.age.between">You must be at least 16 years old!</div>
          </template>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="description">Description</label>
          <br />
          <textarea
            v-model="description"
            id="description"
            rows="5"
            class="form-control"
            @blur="$v.description.$touch"
          ></textarea>
          <template v-if="$v.description.$error">
            <div v-if="!$v.description.required">Description is required!</div>
          </template>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <h3>Skill Set</h3>
            <label for="js">
              <input
                v-model="skillSet"
                type="checkbox"
                id="js"
                value="JavaScript"
                @click="$v.skillSet.$touch"
              /> JavaScript
            </label>
            <label for="csharp">
              <input
                v-model="skillSet"
                type="checkbox"
                id="csharp"
                value="C#"
                @click="$v.skillSet.$touch"
              /> C#
            </label>
            <label for="java">
              <input
                v-model="skillSet"
                type="checkbox"
                id="java"
                value="Java"
                @click="$v.skillSet.$touch"
              /> Java
            </label>
            <label for="php">
              <input
                v-model="skillSet"
                type="checkbox"
                id="php"
                value="PHP"
                @click="$v.skillSet.$touch"
              /> PHP
            </label>
          </div>
        </div>
      </div>
      <template v-if="$v.skillSet.$error">
        <div v-if="!$v.skillSet.required">You must select at least one skill!</div>
      </template>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input v-model="gender" type="radio" id="male" value="Male" @blur="$v.gender.$touch" /> Male
          </label>
          <label for="female">
            <input
              v-model="gender"
              type="radio"
              id="female"
              value="Female"
              @blur="$v.gender.$touch"
            /> Female
          </label>
        </div>
        <template v-if="$v.gender.$error">
          <div v-if="!$v.gender.required">Gender is required!</div>
        </template>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="country">Country</label>
          <select id="country" class="form-control" v-model="country" @blur="$v.country.$touch">
            <option value selected>Please select country</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Germany">Germany</option>
            <option value="England">England</option>
          </select>
        </div>
        <template v-if="$v.country.$error">
          <div v-if="!$v.country.required">Country is required</div>
        </template>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button :disabled="$v.$invalid" class="btn btn-primary" @click="submitHandler">Submit!</button>
        </div>
      </div>
    </form>
    <form class="flex-fill">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-heading">Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Mail: {{email}}</p>
              <p>Password: {{password}}</p>
              <p>Age: {{age}}</p>
              <p>Description: {{description}}</p>
              <p>
                <strong>Skill Set?</strong>
              </p>
              <ul>
                <li v-for="(skill, index) in skillSet" :key="index">{{skill}}</li>
              </ul>
              <p>Gender: {{gender}}</p>
              <p>Country: {{country}}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  integer,
  between
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: "",
      age: null,
      description: "",
      skillSet: [],
      gender: null,
      country: null
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    age: {
      required,
      integer,
      between: between(16, 130)
    },
    description: {
      required
    },
    skillSet: {
      required
    },
    gender: {
      required
    },
    country: {
      required,
      between: between(6, 2000)
    }
  },
  methods: {
    submitHandler() {
      console.log(this.$v);
    }
  }
};
</script>
