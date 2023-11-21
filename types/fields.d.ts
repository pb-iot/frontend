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

declare type SelectFieldOption = {
  [key: string]: any
  label: string
  disabled?: boolean
} | string | number

declare interface GeneralSelectMenuFieldProps<T extends SelectFieldOption> extends TextFieldProps<T | T extends string ? T[] : T[]> {
  multiple?: true | false

  options: T[]

  searchable?: boolean
  searchablePlaceholder?: string

}

declare interface SingleSelectMenuFieldProps<T> extends GeneralSelectMenuFieldProps<T> {
  modelValue?: T
  multiple?: false
}

declare interface MultipleSelectMenuFieldProps<T> extends GeneralSelectMenuFieldProps<T> {
  modelValue?: T[]
  multiple: true
}

declare type SelectMenuFieldProps<T = SelectFieldOption> = SingleSelectMenuFieldProps<T> | MultipleSelectMenuFieldProps<T>
