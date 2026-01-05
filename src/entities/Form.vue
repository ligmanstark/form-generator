<template>
  <form class="form form--primary">
    <header>
      <slot name="header">
        <h1>Название формы</h1>
      </slot>
    </header>
    <main class="fields--group">
      <div class="fieldset" :class="field.class" v-for="(field, idx) of form.fields" :key="idx">
        <slot name="field" :field="field" :formData="localValue">
          <label v-if="!field.attrsLink?.href && !field.attrsLink?.to" :for="field.name">{{
            field.label
          }}</label>
          <label v-else :for="field.name">
            <component :is="field.attrsLink?.is" v-bind="field.attrsLink">{{
              field.label
            }}</component></label
          >

          <input
            v-if="field.type !== 'textarea' && field.type !== 'select'"
            :type="field.type"
            :name="field.name"
            :id="field.name"
            :placeholder="field.placeholder"
            v-model="localValue[field.value]"
          />

          <select
            v-else-if="field.type === 'select'"
            :name="field.name"
            :id="field.name"
            v-model="localValue[field.value]"
          >
            <option v-for="(option, oddx) of field.options" :key="oddx" v-bind="option.attrs">
              {{ option.label }}
            </option>
          </select>

          <textarea
            v-else
            :name="field.name"
            :id="field.name"
            :placeholder="field.placeholder"
            v-model="localValue[field.value]"
          />
        </slot>
      </div>
    </main>
    <footer>
      <slot name="footer">
        <div class="btn--group">
          <template class="" v-for="(button, iddx) of form.buttons" :key="iddx">
            <component
              :disabled="button.disabledRule === 'formValid' ? !isFormValid : false"
              v-bind:is="button.is"
              v-bind="button.attrs"
              @click.prevent="
                button.handler &&
                store.dispatch(button.handler, button.type === 'submit' ? localValue : undefined)
              "
              >{{ button.text }}</component
            >
          </template>
        </div>
      </slot>
    </footer>
  </form>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import type { TForm } from '@/shared/types'

const { form, modelValue } = defineProps<{
  form: TForm
  modelValue: Record<string, any>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, any>): void
}>()

const store = useStore()

const localValue = computed({
  get: () => modelValue,
  set: (val: Record<string, any>) => {
    emit('update:modelValue', val)
  },
})

const isFormValid = computed(() => {
  return form.fields.every((field) => {
    const valid = computed(() => field.require)
    console.log('valid', valid.value, field)
    if (!valid.value) return true

    const value = localValue.value[field.value]
    let isFilled = false

    if (field.type === 'checkbox') {
      isFilled = value === true
    } else {
      isFilled = value !== undefined && value !== null && value !== ''
    }
     const isEmailValid = field.type !== 'email' || (value && value.includes('@'))
    console.log('isFilled', isFilled, 'isEmailValid', isEmailValid)
    return isFilled && isEmailValid
  })
})
</script>
<style lang="scss" scoped>
.form {
  width: 400px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form--primary {
  border: 2px solid $color-border;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.fields--group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fieldset {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.placeholder-option {
  font-style: italic;
  color: #999;
}

.field--checkbox {
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}
</style>
