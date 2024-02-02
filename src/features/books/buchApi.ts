import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const supabaseApi = createApi({
    reducerPath: "BücherApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://havsdrwogfkzzlkemcvz.supabase.co',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8',
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8'},
    }),
    tagTypes: ['Buch', 'Autor'],
    endpoints: (builder) => ({
        getBuch: builder.query({
            query: () => 'rest/v1/buch',
            providesTags: ['Buch']
        }),

        removeBuch: builder.mutation({
            query: (buch_id) => ({
                url: `rest/v1/buch?buch_id=eq.${buch_id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Buch']
        }),

        createBuch: builder.mutation({
            query: ({payload}) => ({
            url: `rest/v1/buch`,
            method: 'post',
            body: {...payload}
            }),
            invalidatesTags: ['Buch']
        }),

        updateBuch: builder.mutation({
            query: ({buch_id, payload}) => ({
                url: `rest/v1/buch?buch_id=eq.${buch_id}`,
                method: 'put',
                body: {...payload,
                buch_id}
            }),
            invalidatesTags: ['Buch']
        }),
        getAutor: builder.query({
            query: () => 'rest/v1/autor',
            providesTags: ['Autor']
        }),

        createAutor: builder.mutation({
            query: ({payload}) => ({
                url: 'rest/v1/autor',
                method: 'post',
                body: {...payload}
            }),
            invalidatesTags: ['Autor']
        }),

        removeAutor: builder.mutation({
            query: (autor_id) => ({
                url: `rest/v1/autor?autor_id=eq.${autor_id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Autor']
        }),

    })
})

export const {useGetBuchQuery, useGetAutorQuery, useRemoveBuchMutation, useCreateBuchMutation, useUpdateBuchMutation, useCreateAutorMutation, useRemoveAutorMutation} = supabaseApi;
export { supabaseApi };







