import { z } from 'zod'

export const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, 'Por favor informe um CEP válido'),
      street: z.string().min(1, 'Por favor informe uma rua válida'),
      number: z.string().min(1, 'Por favor informe um número válido'),
      city: z.string().min(1, 'Por favor informe uma cidade válida'),
      complement: z.string(),
      district: z.string().min(1, 'Por favor informe um bairro válido'),
      state: z.string().min(1, 'Por favor informe um estado válido'),
    }),
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      street: field.address.street,
      district: field.address.district,
      number: field.address.number,
      state: field.address.state,
      city: field.address.city,
      complement: field.address.complement,
    },
  }))
