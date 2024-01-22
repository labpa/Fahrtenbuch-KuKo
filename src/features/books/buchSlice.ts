import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Buch, InputBuch} from "./Buch";
import supabase from "../../config/SupabaseClient";
import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";

export type BuchState = {
    buch: Buch[];
}


export const buchSlice = createSlice({
    name: 'buch',
    initialState: {},
    reducers: {

    }
})






//todo Anbindung an Supabade

// const supabaseApi = createApi({
//     baseQuery: fakeBaseQuery(),
//     endpoints: (builder) => ({
//         getBuch: builder.query({
//             queryFn: async () => {
//                 const {data, error} = await supabase
//                     .from('buch')
//                     . select()
//
//                 if(error){
//                     throw {error};
//                 }
//                 return {data};
//             }
//         })
//     })
// })
//
// export const { useGetBookQuery } = supabaseApi
// export { supabaseApi }






export default buchSlice.reducer;