'use client'
import { useCep } from './useCep'

export default function Home() {
  const { errors, handleFormSubmit, handleSubmit, register } = useCep()
  return (
    <main className="text-center w-screen py-3 h-screen   bg-zinc-200">
      <div className="w-3/4 bg-zinc-50 shadow-md rounded-lg h-fit mx-auto py-8 gap-5 text-zinc-900 ">
        <h2>Cep</h2>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mt-3  flex  flex-col gap-3 justify-center items-center"
        >
          <input
            {...register('address.zipCode')}
            type="text"
            placeholder="CEP"
            maxLength={9}
            className="py-1 px-3 border border-zinc-300 rounded-md w-2/4"
          />
          {errors.address?.zipCode?.message && (
            <p className="text-red-500  mt-[-10px]">
              {errors.address?.zipCode?.message}
            </p>
          )}
          <input
            {...register('address.street')}
            type="text"
            placeholder="Rua"
            className="py-1 px-3 border border-zinc-300 rounded-md w-2/4"
          />
          {errors.address?.street?.message && (
            <p className="text-red-500  mt-[-10px]">
              {errors.address?.street?.message}
            </p>
          )}

          <input
            {...register('address.number')}
            type="text"
            placeholder="Número"
            className="py-1 px-3 border border-zinc-300 rounded-md w-2/4"
          />
          {errors.address?.number?.message && (
            <p className="text-red-500  mt-[-10px]">
              {errors.address?.number?.message}
            </p>
          )}
          <input
            {...register('address.district')}
            type="text"
            placeholder="Bairro"
            className="py-1 px-3 border border-zinc-300 rounded-md w-2/4"
          />
          {errors.address?.district?.message && (
            <p className="text-red-500  mt-[-10px]">
              {errors.address?.district?.message}
            </p>
          )}
          <input
            {...register('address.complement')}
            type="text"
            placeholder="Complemento"
            className="py-1 px-3 border border-zinc-300 rounded-md w-2/4"
          />
          {errors.address?.complement?.message && (
            <p className="text-red-500  mt-[-10px]">
              {errors.address?.complement?.message}
            </p>
          )}
          <input
            {...register('address.city')}
            type="text"
            placeholder="Cidade"
            className="py-1 px-3 border border-zinc-300 rounded-md w-2/4"
          />
          {errors.address?.city?.message && (
            <p className="text-red-500  mt-[-10px]">
              {errors.address?.city?.message}
            </p>
          )}
          <input
            {...register('address.state')}
            type="text"
            placeholder="Estado"
            className="py-1 px-3 border border-zinc-300 rounded-md w-2/4"
          />
          {errors.address?.state?.message && (
            <p className="text-red-500  mt-[-10px]">
              {errors.address?.state?.message}
            </p>
          )}
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 w-2/4 rounded-md py-1 px-3 text-white"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}
