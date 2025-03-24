import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MenuCategories } from '../pages/Categories'

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
    })
  })
})

export const { useGetRestaurantQuery, useGetIdQuery } = api

export default api
