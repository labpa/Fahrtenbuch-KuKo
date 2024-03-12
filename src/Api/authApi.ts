import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const supabaseAuthApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://havsdrwogfkzzlkemcvz.supabase.co',

        prepareHeaders: (headers, {getState}) => {
            const token = localStorage.getItem("access_Token");
            headers.set('apiKey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8')
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
                url: '/auth/v1/user',
                method: 'GET'
            })
        }),

        //todo: Versuch Liste aller User zu bekommen
        getUsers: builder.query({
            query: () => 'rest/v1/profiles',
            providesTags: ['User']
        }),

        //todo: hier weiter url still wrong
        resetPassword: builder.mutation({
            query: (email) => ({
                url: '/auth/v1/token/recovery',
                method: 'POST',
                body: {email},
            })
        }),

        //registerUser Funktioniert
        registerUser: builder.mutation({
            query: ({firstname, email, password}) => ({
                url: '/auth/v1/signup',
                method: 'POST',
                body: {firstname, email, password}
            }),
        }),

        //loginUser funktioniert
        loginUser: builder.mutation({
            query: ({email, password}) => ({
                url: '/auth/v1/token?grant_type=password',
                method: 'POST',
                body: {grand_type: 'password', email, password},
            }),
        }),
    }),

})
export const {
    useGetUserDetailsQuery,
    useGetUsersQuery,
    useResetPasswordMutation,
    useLoginUserMutation,
    useRegisterUserMutation
} = supabaseAuthApi;

export {supabaseAuthApi};