import { BaseUrl } from "@/utils/constants/apiConstants";
import { MenuItemsEndpoint } from "@/utils/constants/apiEndpointConstants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
    reducerPath: "menuApi",
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
    endpoints: (builder) => ({
        getMenuItems: builder.query({
            query: ({restaurantId,restaurantTableId}) => `${MenuItemsEndpoint}?restaurant_id=${restaurantId}&restaurant_table_id=${restaurantTableId}`,
        }),
        getMenuItemById: builder.query({
            query: (menu_item_id) => `${MenuItemsEndpoint}/${menu_item_id}`,
        }),
    }),
});

export const { useGetMenuItemsQuery,useGetMenuItemByIdQuery } = menuApi;
