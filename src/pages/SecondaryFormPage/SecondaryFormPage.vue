<template>
  <div class="page--container">
    <div>
      <Form :form="form" :modelValue="formData" @update:modelValue="formData = $event">
        <template #header>
          <h1>Вторая форма</h1>
        </template>
      </Form>
      <div v-if="isSubmitting">Отправка...</div>
      <div v-if="submitError" class="error">{{ submitError }}</div>
      <div v-if="submitSuccess" class="success">Форма успешно отправлена!</div>
    </div>
    <div>
      <p>У текущей формы реализованы следующе поля:</p>
      <ul>
        <li>input type="text" - текстовое поле для ввода никнейма пользователя</li>
        <li>checkbox - поле для подписки на новости</li>
        <li>checkbox - поле для согласия с условиями,с ссылкой</li>
        <li>input type="email" - текстовое поле для ввода электронной почты пользователя</li>
        <li>input type="password" - текстовое поле для ввода пароля пользователя</li>
      </ul>
      <div style="width: fit-content;">
        <RouterLink class="btn btn--primary" to="/">Перейти к 1 форме</RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Form from '@/entities/Form.vue'
import { ref, computed, watch, reactive } from 'vue'
import { useStore } from 'vuex'
import { FormContent, initialFormData } from './_data/index'

const store = useStore()

const form = ref(FormContent)

const formData = ref<Record<string, any>>({ ...initialFormData })

const isSubmitting = computed(() => store.state.isSubmitting)
const submitError = computed(() => store.state.submitError)
const submitSuccess = computed(() => store.state.submitSuccess)
const resetTrigger = computed(() => store.state.resetTrigger)

watch(submitSuccess, (newVal) => {
  if (newVal) {
    formData.value = { ...initialFormData }
  }
})

watch(resetTrigger, (newVal) => {
  if (newVal) {
    formData.value = { ...initialFormData }
    store.commit('setResetTrigger', false)
  }
})
</script>
<style scoped lang="scss">
.page--container {
  display: flex;
  flex-direction: row;
  gap: 24px;
}
</style>
