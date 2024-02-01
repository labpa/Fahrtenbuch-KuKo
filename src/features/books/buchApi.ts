import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {url} from "inspector";


const supabaseApi = createApi({
    reducerPath: "BücherApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://havsdrwogfkzzlkemcvz.supabase.co',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8',
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8'},
    }),
    endpoints: (builder) => ({
        getBuch: builder.query({
            query: () => 'rest/v1/buch'
        }),
        // getAutor: builder.query({
        //     query: (autor_id) => `rest/v1/autor?autor_id=eq.${autor_id}`
        // }),
        getAutor: builder.query({
            query: () => 'rest/v1/autor'
        }),

        removeBuch: builder.mutation({
            query: (buch_id) => ({
                url: `rest/v1/buch?buch_id=eq.${buch_id}`,
                method: 'delete',
            })
        }),

        createBuch: builder.mutation({
            query: ({titel, isbn}) => ({
            url: `rest/v1/buch`,
            method: 'post',
            body: titel, isbn,
            })
        }),

        updateBuch: builder.mutation({
            query: ({titel, isbn}) => ({
                url: '',
                method: '',
                body: titel, isbn
            })
        }),




    })
})

export const {useGetBuchQuery, useGetAutorQuery, useRemoveBuchMutation, useCreateBuchMutation, useUpdateBuchMutation} = supabaseApi;
export { supabaseApi };







