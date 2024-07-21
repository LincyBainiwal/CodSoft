 import { apiSlice } from "../apiSlice";

const USER_URL = "/user"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: (data) => ({
                url:`${USER_URL}/profile`,
                method: 'PUT',
                body:data,
                credential:"include",
            }),
        }),

        getTeamList: builder.query({
            query: () => ({
                url:`${USER_URL}/get-team`,
                method: 'GET',
                credential:"include",
            }),
        }),

    }),
});

export const {useUpdateUserMutation , useGetTeamListQuery} = userApiSlice;