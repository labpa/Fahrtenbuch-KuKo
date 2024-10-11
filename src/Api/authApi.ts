import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Überprüfe, ob die Umgebungsvariablen vorhanden sind und setze einen Fallback oder werfe eine Fehlermeldung
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseApiKey = process.env.REACT_APP_SUPABASE_API_KEY || '';

if (!supabaseUrl || !supabaseApiKey) {
    throw new Error("Supabase URL oder API-Key sind nicht definiert.");
}

const supabaseAuthApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: supabaseUrl, // Base-URL aus der .env-Datei

        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("access_Token");

            // API-Schlüssel aus der .env-Datei
            headers.set('apiKey', supabaseApiKey);

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers; // Rückgabe der Headers nicht vergessen
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: '/auth/v1/user',
                method: 'GET',
            }),
        }),

        getUsers: builder.query({
            query: () => 'rest/v1/profiles',
            providesTags: ['User'],
        }),

        resetPassword: builder.mutation({
            query: (email) => ({
                url: '/auth/v1/token/recovery',
                method: 'POST',
                body: { email },
            }),
        }),

        registerUser: builder.mutation({
            query: ({ firstname, email, password }) => ({
                url: '/auth/v1/signup',
                method: 'POST',
                body: { firstname, email, password },
            }),
        }),

        loginUser: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/v1/token?grant_type=password',
                method: 'POST',
                body: { grand_type: 'password', email, password },
            }),
        }),
    }),
});

export const {
    useGetUserDetailsQuery,
    useGetUsersQuery,
    useResetPasswordMutation,
    useLoginUserMutation,
    useRegisterUserMutation,
} = supabaseAuthApi;

export { supabaseAuthApi };
