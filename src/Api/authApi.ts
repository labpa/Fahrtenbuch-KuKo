import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const supabaseAuthApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://havsdrwogfkzzlkemcvz.supabase.co',

        prepareHeaders: (headers, {getState}) => {
            const token = localStorage.getItem("access_Token");
            headers.set('apiKey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8')
           // console.log(token);
            if(token){
                headers.set('authorization', `Bearer ${token}`)

                return headers;
            }
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({

        getUserDetails : builder.query({
            query: () =>({
                url: 'auth/v1/user',
                method: 'GET'
            })
        }),

        //todo hier weiter url stimmt wohl noch nicht oder falscher ort dafür
        resetPassword: builder.mutation({
            query: (email : any) => ({
                url: '/auth/v1/password/forgot',
                method: 'POST',
                body: {email},
            })
        })




    }),
})
export const {useGetUserDetailsQuery, useResetPasswordMutation} = supabaseAuthApi;
export {supabaseAuthApi};