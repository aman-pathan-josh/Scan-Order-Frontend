import { BaseUrl } from '@/utils/constants/apiConstants';
import { ReviewsEndpoint } from '@/utils/constants/apiEndpointConstants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BaseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Reviews'],
    endpoints: (builder) => ({
        getReviews: builder.query({
            query: (menu_item_id) => `/${ReviewsEndpoint}?menu_item_id=${menu_item_id}`,
            providesTags: ['Reviews'],
        }),
        addReview: builder.mutation({
            query: (reviewData) => ({
                url: `/${ReviewsEndpoint}`,
                method: 'POST',
                body: reviewData,
            }),
            invalidatesTags: ['Reviews'],
        }),
        updateReview: builder.mutation({
            query: ({ review_id, ...updatedData }) => ({
                url: `/${ReviewsEndpoint}/${review_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['Reviews'],
        }),
        deleteReview: builder.mutation({
            query: (review_id) => ({
                url: `/${ReviewsEndpoint}/${review_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Reviews'],
        }),
    }),
});

export const { useGetReviewsQuery, useAddReviewMutation, useUpdateReviewMutation, useDeleteReviewMutation } = reviewsApi;
