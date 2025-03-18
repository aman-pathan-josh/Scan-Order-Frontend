import { useParams } from "react-router-dom";
import ReviewsList from "./ReviewsList";
import { useGetMenuItemByIdQuery } from "@/redux/apis/menuApi";

export default function index() {
    const { menu_item_id } = useParams();
    const { data } = useGetMenuItemByIdQuery(menu_item_id);
    
    return (
        <>
            <ReviewsList menu_item_id={menu_item_id} menu_item_data={data} />
        </>
    )
}

