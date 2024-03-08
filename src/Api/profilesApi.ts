import {supabaseApiFahrt} from "./fahrtApi";

const extendApi = supabaseApiFahrt.injectEndpoints({
    endpoints: (build) => ({
        getProfiles: build.query({
            query: ()=> 'rest/v1/profiles',
            providesTags: ['Profiles']
        }),

        updateProfiles: build.mutation({
            query: ({id, payload}) => ({
                url: `rest/v1/profiles?id=eq.${id}`,
                method: 'put',
                body: {...payload, id}
            }),
            invalidatesTags: ['Profiles']
        }),
    }),
    overrideExisting: false,
})

export const {    useGetProfilesQuery,
    useUpdateProfilesMutation} = extendApi