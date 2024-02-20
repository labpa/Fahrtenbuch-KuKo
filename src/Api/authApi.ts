import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../app/store";

const supabaseAuthApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://havsdrwogfkzzlkemcvz.supabase.co',
        // apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8',

        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth.userToken
            if(token){
                headers.set('authorization', 'Bearer &{token')
                return headers;
            }
        },
    }),

    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUserDetails : builder.query({
            query: () =>({
                url: 'rest/v1/user',
                method: 'GET'
            })
        })
    }),
})
export const {useGetUserDetailsQuery} = supabaseAuthApi;
export {supabaseAuthApi};