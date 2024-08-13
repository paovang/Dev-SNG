<template>
    <div>Test2: </div></br>
    <slot name="header"></slot>
    <hr/>
    <p>ສະເເດງ Provie: {{ message }}</p>
    <hr/>
    <form @submit.prevent="onSubmit">
        <div class="field">
            <input
                class="input is-link"
                type="text"
                v-model="name"
                placeholder="Please enter name"
                :class="{ 'is-danger': errors.name }"
            />
            <p v-if="errors.name" class="help is-danger">{{ errors.name }}</p>
            </div>
            <div class="field">
                <input
                  class="input is-link"
                  type="text"
                  v-model="currency"
                  :class="{ 'is-danger': errors.currency }"
                  placeholder="Please enter currency"
                />
                <!-- <p v-if="errors.currency" class="help is-danger">{{ errors.currency }}</p> -->
                <!-- <p class="help is-danger">{{ errors.currency ? errors.currency : '' }}</p> -->
                <p class="help is-danger">{{ errors.currency ?? '' }}</p>
              </div>
        <button type="submit" class="button is-success">Save Data</button>
    </form>
</template>
<script setup lang="ts">
    import { inject } from 'vue';
    import { useForm, useField } from 'vee-validate';
    import * as yup from 'yup';

    const validationSchema = yup.object({
    name: yup.string().required('Please enter name.'),
    currency: yup.string()
        .required('Please enter currency.')
        .max(3, 'Currency must be at most 3 characters.')
  });

  const { handleSubmit, errors } = useForm({
    validationSchema
  });

  const { value: name } = useField<string>('name');
  const { value: currency } = useField<string>('currency');

  const onSubmit = handleSubmit(async(value) => {
    console.log('Submitted values:', value);
  });
    
    const message = inject('message')
</script>

<style >
 .is-dangers {
    border: 1px solid rgb(8, 3, 158) !important;
 }
</style>