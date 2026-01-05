import { createStore } from 'vuex'
import type { Commit, Dispatch } from 'vuex/types/index.js'

interface FormState {
  isSubmitting: boolean
  submitError: Error | null
  submitSuccess: boolean
  resetTrigger: boolean
}

const state: FormState = {
  isSubmitting: false,
  submitError: null,
  submitSuccess: false,
  resetTrigger: false,
}

const mutations = {
  setSubmitting(state: FormState, isSubmitting: boolean) {
    state.isSubmitting = isSubmitting
  },
  setSubmitError(state: FormState, error: Error | null) {
    state.submitError = error
  },
  setSubmitSuccess(state: FormState, success: boolean) {
    state.submitSuccess = success
  },
  setResetTrigger(state: FormState, value: boolean) {
    state.resetTrigger = value
  },
}

const actions = {
  async submitForm({ commit }: { commit: Commit }, formData: Record<string, any>) {
    commit('setSubmitting', true)
    commit('setSubmitError', null)
    commit('setSubmitSuccess', false)

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 2000)
      })
      commit('setSubmitSuccess', true)
      console.log('Форма отправлена:', formData)
    } catch (error: Error | unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка'
      commit('setSubmitError', errorMessage)
    } finally {
      commit('setSubmitting', false)
    }
  },
  async resetFormState({ commit }: { commit: Commit }) {
    commit('setSubmitting', false)
    commit('setSubmitError', null)
    commit('setResetTrigger', true)
  },
  async submitFormAndReset({ dispatch }: { dispatch: Dispatch }, formData: Record<string, any>) {
    await dispatch('submitForm', formData)
    await dispatch('resetFormState')
  },
}

export default createStore({
  state,
  mutations,
  actions,
})
