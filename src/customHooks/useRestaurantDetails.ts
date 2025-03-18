import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useRestaurantDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const restaurantIdFromParams = searchParams.get("restaurant_id");
    const restaurantTableIdFromParams = searchParams.get("restaurant_table_id");

    const [restaurantId, setRestaurantId] = useState(sessionStorage.getItem("restaurant_id") || "");
    const [restaurantTableId, setRestaurantTableId] = useState(sessionStorage.getItem("restaurant_table_id") || "");

    useEffect(() => {
        if (restaurantIdFromParams && restaurantTableIdFromParams) {
            sessionStorage.setItem("restaurant_id", restaurantIdFromParams);
            sessionStorage.setItem("restaurant_table_id", restaurantTableIdFromParams);
            setRestaurantId(restaurantIdFromParams);
            setRestaurantTableId(restaurantTableIdFromParams);
        }
    }, [restaurantIdFromParams, restaurantTableIdFromParams]);

    return { restaurantId, restaurantTableId }; 
};

export default useRestaurantDetails; 
