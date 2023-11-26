import { z } from 'zod'
import { schemaForm } from './schema'

export type FormProps = z.infer<typeof schemaForm>
export type AddressProps = {
  bairro: string
  uf: string
  localidade: string
  logradouro: string
  complemento: string
}
