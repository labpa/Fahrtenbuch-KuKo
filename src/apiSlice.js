import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
        deleteOneProduct: builder.mutation({

        })
    }),
});

export const { useGetAllProductsQuery, useDeleteOneProductMutation } = productsApi;
