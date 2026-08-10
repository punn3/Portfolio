<script lang="ts" setup>
import { reactive,ref } from 'vue'
import Swal from 'sweetalert2'

interface FormData {
  name: string
  lastname: string
  email: string
  tel: string
}

interface FormErrors {
  name?: string
  lastname?: string 
  email?: string
  tel?: string
}

const form = reactive<FormData>({
  name: '',
  lastname: '',
  email: '',
  tel: '',
})

const errors = reactive<FormErrors>({})

function validate(): boolean {
  errors.name = form.name ? '' : 'Please enter your name'
  errors.lastname = form.lastname ? '' : 'Please enter your lastname'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ? ''
    : 'Please enter a valid email'
  errors.tel = form.tel ? '' : 'Please enter your phone'

  return !errors.name && !errors.lastname && !errors.email && !errors.tel
}

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwKX6agi64go4QTbKykO0vymFTi8qIthzXnQinHZuWzCNISzBzNd6g67XOPgYJiiu13Eg/exec'

const isLoading = ref(false)

async function handleSubmit() {
  if (!validate()) {
    console.warn('ฟอร์มไม่ถูกต้อง', errors)
    return
  }

  isLoading.value = true
  try {
    const params = new URLSearchParams()
    params.append('name', form.name)
    params.append('lastname', form.lastname)
    params.append('email', form.email)
    params.append('tel', form.tel)

    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: params,
    })

    Swal.fire({
      title: 'Thank you!',
      text: 'Your information has been sent.',
      icon: 'success',
    })

    // reset form
    form.name = ''
    form.lastname = ''
    form.email = ''
    form.tel = ''
  }
  catch (err) {
    console.error(err)
    Swal.fire({
      title: 'Error',
      text: 'Something went wrong. Please try again.',
      icon: 'error',
    })
  }
  finally {
    isLoading.value = false
  }
}
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <!-- <pre>
      {{ form }}
    </pre> -->
    <div class="row color-white gap-2">
      <div class="col-12 ">
        <div class="d-flex flex-column gap-1">
          <label for="name" class="title-head">Name :</label>
          <input id="name" class="form-control title-head" v-model="form.name" type="text" placeholder="John"
            :class="{ 'is-invalid': errors.name }" />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex flex-column gap-1">
          <label for="lastname" class="title-head">Lastname :</label>
          <input id="lastname" class="form-control title-head" v-model="form.lastname" type="text" placeholder="Doe"
            :class="{ 'is-invalid': errors.lastname }" />
          <span v-if="errors.lastname" class="error">{{ errors.lastname }}</span>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex flex-column gap-1">
          <label for="email" class="title-head">Email :</label>
          <input id="email" class="form-control title-head" v-model="form.email" type="email"
            placeholder="xxxx@gmail.com" :class="{ 'is-invalid': errors.email }" />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex flex-column gap-1">
          <label for="tel" class="title-head">Phone :</label>
          <input id="tel" class="form-control title-head" v-model="form.tel" type="tel" placeholder="xxx-xxx-xxxx"
            :class="{ 'is-invalid': errors.tel }" />
          <span v-if="errors.tel" class="error">{{ errors.tel }}</span>
        </div>
      </div>
    </div>
    <div class="submit d-flex my-3">
      <button class="btn px-5 title-head" type="submit" :disabled="isLoading">
        <span v-if="isLoading">Sending...</span>
        <span v-else>Send</span>
      </button>
    </div>
  </form>
</template>
<style scoped>
label {
  color: white;
}

.is-invalid {
  border: 1px solid red;
}

.error {
  color: red;
  font-size: 0.875rem;
}

.swal2-popup {
  border-radius: 30px;
}
</style>
