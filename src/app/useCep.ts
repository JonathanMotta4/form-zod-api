import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { schemaForm } from './schema'
import { AddressProps, FormProps } from './types'

export const useCep = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        city: '',
        complement: '',
        district: '',
        number: '',
        state: '',
        street: '',
        zipCode: '',
      },
    },
  })
  const zipCode = watch('address.zipCode')
  const handleFormSubmit = (data) => {
    console.log(data)
  }
  const handleSetData = useCallback(
    (data: AddressProps) => {
      setValue('address.city', data.localidade)
      setValue('address.street', data.logradouro)
      setValue('address.state', data.uf)
      setValue('address.district', data.bairro)
      setValue('address.complement', data.complemento)
    },
    [setValue],
  )
  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      )

      handleSetData(data)
    },
    [handleSetData],
  )

  useEffect(() => {
    setValue('address.zipCode', zipCode)
    if (zipCode.length !== 9) return

    handleFetchAddress(zipCode)
  }, [handleFetchAddress, setValue, zipCode])

  return { errors, register, handleSubmit, handleFormSubmit }
}
