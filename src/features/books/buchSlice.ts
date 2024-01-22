import supabase from "../../config/SupabaseClient";
import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";


//DDaten werden von Supabase geholt

const supabaseApi = createApi({
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getBuch: builder.query({
            queryFn: async () => {
                const {data, error} = await supabase
                    .from('buch')
                    . select()

                if(error){
                    throw {error};
                }
                return {data};
            }
        })
    })
})

export const {useGetBuchQuery} = supabaseApi
export { supabaseApi }






