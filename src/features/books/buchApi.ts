import supabase from "../../config/SupabaseClient";
import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../../app/store";


//Daten werden von Supabase geholt
const supabaseApi = createApi({
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
        // deleteBuch: builder.mutation({
        //
        // })
    })
})

export const {useGetBuchQuery} = supabaseApi;
export const selectBuch = (state: RootState) => state.api.queries.data; //todo -> Fragen
export { supabaseApi };







