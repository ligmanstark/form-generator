type TButton = {
  is: 'button' | 'a'
  type: 'button' | 'submit' | 'reset'
  text: string
  disabledRule?: string
  attrs?: Record<string, any>
  handler?: string
}

type Field = {
  type: 'text' | 'number' | 'checkbox' | 'textarea' | 'select' | 'radio' | 'password' | 'email'
  value: string
  placeholder?: string
  name: string
  label: string
  require: boolean
  class?: string
  attrsLink?: {
    is: string
    to?: string
    href?: string
    target?: string
  }
  options?: Array<{
    label: string
    attrs: {
      value: string
      disabled?: boolean
      hidden?: boolean
      selected?: boolean
      class?: string
    }
  }>
}

export type TForm = {
  fields: Field[]
  buttons: TButton[]
}
