import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";

const backendUrl = 'https://havsdrwogfkzzlkemcvz.supabase.co';

export const registerUser = createAsyncThunk<any, any>(
    'auth/register',
    async ({firstName, email, password} , {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8'
                },
            }
            const data: any =  await axios.post(
                `${backendUrl}/auth/v1/signup`,
                {firstName, email, password},
                config
            )
            return data;
        } catch (error : any ) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const userLogin = createAsyncThunk<any, any>(
    'auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdnNkcndvZ2Zrenpsa2VtY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzEwOTAsImV4cCI6MjAyMDQwNzA5MH0.CHbFOql-glKAKE_J_DENJHCMZFunAfd-COzXK96Yjd8'
                },
            }
            const data: any = await axios.post(
                `${backendUrl}/auth/v1/token?grant_type=password`,
                {email, password},
                config
            )
            localStorage.setItem('access_Token', data.data.access_token);
            return data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)