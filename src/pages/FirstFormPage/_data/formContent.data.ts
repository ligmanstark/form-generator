import type { TForm } from '@/shared/types'

const FormContent: TForm = {
  fields: [
    {
      type: 'text',
      value: 'name',
      placeholder: 'Введите ваше имя',
      name: 'name',
      require: true,
      label: 'Имя',
    },
    {
      type: 'select',
      value: 'gender',
      name: 'gender',
      require: true,
      label: 'Ваш пол',
      options: [
        {
          label: 'Выберите пол',
          attrs: {
            value: '',
            disabled: true,
            selected: true,
            hidden: true,
            class: 'placeholder-option',
          },
        },
        { label: 'Муж.', attrs: { value: 'male' } },
        { label: 'Жен.', attrs: { value: 'female' } },
      ],
    },
    {
      type: 'textarea',
      value: 'comments',
      placeholder: 'Мне нравится ваш сайт...',
      require: true,
      name: 'comments',
      label: 'Ваша обратная связь',
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
        class: 'btn btn--primary',
      },
    },
    {
      is: 'button',
      type: 'reset',
      text: 'Сбросить',
      handler: 'resetFormState',
      attrs: {
        class: 'btn btn--secondary',
      },
    },
  ],
} satisfies TForm

export default FormContent
