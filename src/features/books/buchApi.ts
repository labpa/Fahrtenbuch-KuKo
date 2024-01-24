import supabase from "../../config/SupabaseClient";
import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";



//Daten werden von Supabase geholt
const supabaseApi = createApi({
    reducerPath: "BücherApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getBuch: builder.query({
            queryFn: async () => {
                const {data, error} = await supabase
                    .from('buch')
                    . select('*, autor(*) ')

                if(error){
                    throw {error};
                }
                return {data};
            }
        }),
        removeBuch: builder.mutation({
            query: async () => {
                const { error } = await supabase
                    .from('buch')
                    .delete()
                    .eq('buch_id', 'id')
                if(error){
                    console.log(error);
                }
            }
        }),

        saveBuch: builder.mutation({
            query: async () => {
                const { data, error } = await supabase
                    .from('buch')
                    .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
                    .select()

                if(error){
                    console.log(error);
                }else{
                    return data;
                }

            }
        })

    })
})

export const {useGetBuchQuery} = supabaseApi;
export const {useRemoveBuchMutation} = supabaseApi;
export { supabaseApi };







