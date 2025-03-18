import MenuItemCard from "@/features/Menu/components/MenuItemCard";
import { useGetMenuItemsQuery } from "@/redux/apis/menuApi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { setMenuItems } from "@/redux/slices/menuSlice";
import SearchBar from "@/components/SearchBar/SearchBar";
import useRestaurantDetails from "@/customHooks/useRestaurantDetails";
import NotFound from "./NotFound";

export default function Menu() {
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const restaurantId = searchParams.get("restaurant_id");
    // const restaurantTableId = searchParams.get("restaurant_table_id");

    const {restaurantId, restaurantTableId} = useRestaurantDetails();
    
    const { data, isLoading, error } = useGetMenuItemsQuery({ restaurantId, restaurantTableId }, {
        pollingInterval: 15000,
    });
    
    if (isLoading) return <p>Loading menu...</p>;
    if (error) return (
        <NotFound/>
    );

    return (
        <>
            {/* <SearchBar/> */}
            <div className="pt-10 pl-20 w-full border-b pb-10 flex justify-start flex-wrap gap-10">
                {!data?
                    <NotFound/>
                :data?.map((item: any) => (
                    <MenuItemCard key={item.id} item={item} />
                ))
                }
            </div>
        </>
    );
}
