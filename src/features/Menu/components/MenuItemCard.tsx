import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { PencilLine, PencilLineIcon } from "lucide-react";
import './styles.css';
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const MenuItemCard = ({ item }) => {
    const rating_sum = item.reviews.reduce((total, review)=> total + Number(review.rating) , 0);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="card">
            <img
                className="rounded-lg object-contain h-[300px]"
                // src="https://imgmediagumlet.lbb.in/media/2025/01/6790b9b0e59da653ef5df1de_1737537968281.jpg"
                src={item.image_url}
                height={200}
                alt="product image"
            />
            <div className="card-info">
                <div className="flex flex-row justify-between">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.item_name}
                    </h5>
                    <span className="text-md font-bold tracking-tight text-gray-900 dark:text-white">₹ {item.price}</span>


                </div>
                <p className="text-body">{item.description}</p>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {rating_sum ?
                        <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        :
                        <svg
                            className="w-4 h-4 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    }
                    <span className="bg-[#25a244] text-white text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                        {rating_sum ? (rating_sum/item.reviews.length).toFixed(1) : "NA"}
                    </span>
                    <button onClick={() => navigate(`/menu/${item.id}/reviews`)} className="text-sm hover:underline flex justify-between gap-2 pl-2">
                        {item?.reviews.length} Reviews
                    </button>
                </div>
                <div className="card-button" onClick={()=>{dispatch(addToCart(item));toast.success("Item Added to Cart");}}>
                    <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
