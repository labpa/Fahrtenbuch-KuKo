import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

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
        deleteBuch: builder.mutation({
            query: () => ''
        })
    })
})

export const {useGetBuchQuery} = supabaseApi;
export { supabaseApi };







