import type { SubmissionContext } from 'vee-validate'

import * as Yup from 'yup'
// import { toTypedSchema } from '@vee-validate/yup'

type YupSchema<T> = Yup.Schema<T>
type ShapeFromType<S extends object> = {
  [K in keyof S]: YupSchema<S[K]>
}

export const createSchema = <S extends Record<string, any>>(schema: ShapeFromType<S>) => {
  return Yup.object(schema)
}

export const createSubmitHandler = <Schema extends Yup.ObjectSchema<Record<string, any>>>(
  schema: Schema,
  callback: (values: Yup.InferType<Schema>, ctx: SubmissionContext) => void
) => (values: Record<string, any>, ctx: SubmissionContext) => callback(schema.cast(values), ctx)

export { Yup }

export const usePasswordValidationSchema = () => {
  return Yup.string().min(10, 'Hasło musi zawierać minimum 10 znaków')
    .matches(AT_LEAST_ONE_LETTER_UPPERCASE_REGEXP, 'Hasło musi zawierać przynajmniej jedną duzą literę')
    .matches(AT_LEAST_ONE_DIGIT_REGEXP, 'Hasło musi zawierać przynajmniej jedną cyfrę')
    .matches(AT_LEAST_ONE_SPECIAL_CHARACTER_REGEXP, 'Hasło musi zawierać przynajmniej jeden znak specjalny')
    .required('Hasło jest wymagane')
}

export const usePasswordConfirmationValidationSchema = () => {
  return Yup.string().required('Potwierdzenie hasła jest wymagane').oneOf([
    Yup.ref('password')
  ], 'Hasła muszą być takie same')
}

export const useEmailValidationSchema = () => {
  return Yup.string().required('E-mail jest wymagany').email('Niepoprawny adres e-mail')
}
