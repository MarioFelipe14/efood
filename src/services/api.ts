import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MenuCategories } from '../pages/Categories'

type Product = {
  id: number
  price: 0
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description?: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<MenuCategories[], void>({
      query: () => 'restaurantes'
    }),
    getId: builder.query<MenuCategories, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantQuery, useGetIdQuery, usePurchaseMutation } = api

export default api
