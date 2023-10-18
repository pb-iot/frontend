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
