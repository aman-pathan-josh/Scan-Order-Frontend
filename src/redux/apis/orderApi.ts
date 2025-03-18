import { BaseUrl } from "@/utils/constants/apiConstants";
import { OrdersEndpoint } from "@/utils/constants/apiEndpointConstants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery(
    {
      baseUrl: BaseUrl,
      prepareHeaders: (headers) => {
        const token = localStorage.getItem("token");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }
  ),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: ({restaurantId,orderData}) => ({
        url: `/restaurants/${restaurantId}/${OrdersEndpoint}`,
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Orders"], 
    }),
    getOrders: builder.query({
      query: (restaurant_id) => `/restaurants/${restaurant_id}/${OrdersEndpoint}`,
      providesTags: ["Orders"],
    }),
    getOrderStatus: builder.query({
      query: ({restaurant_id,orderId}) => `/restaurants/${restaurant_id}/orders/${orderId}`,
      providesTags: ["Orders"],
    }),
  }),
});

export const { usePlaceOrderMutation, useGetOrdersQuery, useGetOrderStatusQuery } = orderApi;
