import type { TForm } from '@/shared/types'

const FormContent: TForm = {
  fields: [
    {
      type: 'text',
      value: 'nickname',
      placeholder: 'Введите ваш никнейм',
      name: 'nickname',
      require: true,
      label: 'Ваш никнейм',
    },
    {
      type: 'email',
      value: 'email',
      placeholder: 'Введите ваш email',
      name: 'email',
      require: true,
      label: 'Ваш email',
    },
    {
      type: 'password',
      value: 'password',
      placeholder: 'Введите ваш пароль',
      name: 'password',
      require: true,
      label: 'Ваш пароль',
    },
    {
      type: 'checkbox',
      value: 'subscribe',
      name: 'subscribe',
      label: 'Подписаться на новости (необязательно)',
      require: false,
      class: 'field--checkbox',
    },
    {
      type: 'checkbox',
      value: 'privacy-terms',
      name: 'privacy-terms',
      label: 'Согласен с условиями пользовательского соглашения',
      require: true,
      class: 'field--checkbox',
      attrsLink: {
        is: 'RouterLink',
        to: '/privacy',
        target: '_blank',
      },
    },
  ],
  buttons: [
    {
      is: 'button',
      type: 'submit',
      text: 'Отправить',
      disabledRule: 'formValid',
      handler: 'submitFormAndReset',
      attrs: {
        class: 'btn btn--secondary',
      },
    },
    {
      is: 'button',
      type: 'reset',
      text: 'Сбросить',
      handler: 'resetFormState',
      attrs: {
        class: 'btn btn--primary',
      },
    },
  ],
} satisfies TForm

export default FormContent
