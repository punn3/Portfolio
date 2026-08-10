<script setup lang="ts">
defineProps<{
  inputs: Array<any>,
  form: Record<string, any>
}>()
</script>
<template>
  <form autocomplete="off">
    <div class="row">
      <div v-for="(field, index) in inputs" :key="index" class="mb-4" :class="field.class">

        <div v-if="['text', 'password', 'tel', 'number','url'].includes(field.type)">
          <label :for="field.model">{{ field.label }}</label>
          <input :type="field.type" :id="field.model" v-model="form[field.model]" :name="field.model"
            class="form-control" />
        </div>

        <div v-else-if="field.type === 'textarea'">
          <label :for="field.model">{{ field.label }}</label>
          <textarea :id="field.model" v-model="form[field.model]" class="form-control"></textarea>
        </div>

        <div v-else-if="field.type === 'select'">
          <label :for="field.model">{{ field.label }}</label>
          <select :id="field.model" v-model="form[field.model]" class="form-control">
            <option disabled value="">Please select</option>
            <option v-for="option in field.options" :key="option" :value="option"> {{ option }} </option>
          </select>
        </div>

        <div v-else-if="field.type === 'checkbox'">
          <input type="checkbox" :id="field.model" v-model="form[field.model]" />
          <label :for="field.model">{{ field.label }}</label>
        </div>

        <div v-else-if="field.type === 'radio'">
          <div v-for="option in field.options" :key="option">
            <input type="radio" :name="field.model" :value="option" v-model="form[field.model]" /> {{ option }}
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
