<script setup lang="ts">
import { reactive } from 'vue'

const inputs = [
  { type: "text", model: "first_name", label: "First Name", class: "col-4" },
  { type: "text", model: "last_name", label: "Last Name", class: "col-4" },

  { type: "password", model: "password", label: "Password", class: "col-4" },
  { type: "tel", model: "phone", label: "Phone Number" },
  { type: "number", model: "age", label: "Age" },
  { type: "url", model: "link", label: "Resume" },
  { type: "textarea", model: "bio", label: "Biography" },
  {
    type: "select", model: "country", label: "Country",
    options: ["USA", "Canada", "UK"]
  },
  {
    type: "checkbox", model: "agree", label: "I agree to terms"
  },
  {
    type: "radio", model: "gender", label: "Gender",
    options: ["Male", "Female", "Other"]
  }
]

const form = reactive({
  // first_name:'real',
  // last_name: 'test',
  // password: 'test2pass',
})

function submit() {
  console.log(form)
}

</script>
<template>
  <div class="color-white">
    <h1>Form</h1>
    <div class="text-white">
      <pre>
        {{ form }}
      </pre>
    </div>
    <FormTemplate :inputs="inputs" :form="form"></FormTemplate>
    <button @click="submit" class="btn btn-primary">submit</button>
  </div>
</template>
<style></style>
