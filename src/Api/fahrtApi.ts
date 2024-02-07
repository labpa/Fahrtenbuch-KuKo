import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const supabaseApiFahrt = createApi({
    reducerPath: "FahrtApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://havsdrwogfkzzlkemcvz.supabase.co',
        headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8',
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8'},
    }),
    tagTypes: ['Fahrt', 'Fahrerin', 'Fahrzeug'],
    endpoints: (builder) => ({
        // Fahrt
        getFahrt: builder.query({
            query: () => 'rest/v1/fahrt',
            providesTags: ['Fahrt']
        }),

        createFahrt: builder.mutation({
           query: ({payload}) => ({
               url:'rest/v1/fahrt',
               method: 'post',
               body: {...payload}
           }),
            invalidatesTags: ['Fahrt']
        }),

        removeFahrt: builder.mutation ({
            query: (fahrt_id) => ({
                url: `rest/v1/fahrt?fahrt_id=eq.${fahrt_id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Fahrt']
        }),

         // Fahrerin
         getFahrerin: builder.query({
             query: () => 'rest/v1/fahrerin',
             providesTags: ['Fahrerin']
         }),

        createFahrerin: builder.mutation({
            query: ({payload})=> ({
                url: 'rest/v1/fahrerin',
                method: 'post',
                body: {...payload}
            }),
            invalidatesTags: ['Fahrerin']
        }),

        removeFahrerin: builder.mutation({
           query: (fahrerin_id) => ({
               url: `rest/v1/fahrerin?fahrerin_id=eq.${fahrerin_id}`,
               method: 'delete',
           }),
            invalidatesTags: ['Fahrerin']
        }),

        updateFahrerin: builder.mutation({
            query: ({fahrerin_id, payload}) => ({
                url: `rest/v1/fahrerin?fahrerin_id=eq.${fahrerin_id}`,
                method: 'put',
                body: {...payload, fahrerin_id}
            }),
            invalidatesTags: ['Fahrerin']
        }),


        // Fahrzeug
        getFahrzeug: builder.query({
            query: ()=> 'rest/v1/fahrzeug',
            providesTags: ['Fahrzeug']
        }),

        createFahrzeug: builder.mutation({
           query: ({payload}) => ({
               url: 'rest/v1/fahrzeug',
               method: 'post',
               body: {...payload}
           }),
           invalidatesTags: ['Fahrzeug']
        }),

        removeFahrzeug: builder.mutation({
            query: (fahrzeug_id) => ({
                url: `rest/v1/fahrzeug?fahrzeug_id=eq.${fahrzeug_id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Fahrzeug']
        }),

        updateFahrzeug: builder.mutation({
            query: ({fahrzeug_id, payload}) => ({
                url: `rest/v1/fahrzeug?fahrzeug_id=eq.${fahrzeug_id}`,
                method: 'put',
                body: {...payload, fahrzeug_id}
            }),
            invalidatesTags: ['Fahrzeug']
        }),

    })

})
export const {  useGetFahrtQuery, useGetFahrerinQuery, useGetFahrzeugQuery, useCreateFahrtMutation,
                useCreateFahrerinMutation, useRemoveFahrerinMutation, useCreateFahrzeugMutation, useRemoveFahrzeugMutation, useRemoveFahrtMutation, useUpdateFahrerinMutation, useUpdateFahrzeugMutation
                } = supabaseApiFahrt;
export {supabaseApiFahrt};