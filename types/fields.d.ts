declare interface GeneralFieldProps<T = string> {
  name: string
  modelValue?: T
  label?: string
  help?: string
  disabled?: boolean
}

declare interface TextFieldProps<T = string> extends GeneralFieldProps<T> {
  placeholder?: string

  icon?: string
  color?: 'white' | 'primary' | 'gray'
  size?: '2xs' | 'xs' |'sm' | 'md' | 'lg' | 'xl'
}
