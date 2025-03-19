import { removeFromCart, increaseQuantity, decreaseQuantity } from "@/redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function MenuItemCard({item}) {

    const dispatch = useDispatch();

    const [price,setPrice] = useState(Number(item.price));

    useEffect(()=>{
        const current_price = Number(item.price) * Number(item.quantity);
        setPrice(current_price); 
    },[item.quantity])
    
    return (
        <>
            <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm md:p-3">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <img className="h-[120px] w-[120px] rounded-lg" src={item.image_url} alt="imac image" />

                    <label className="sr-only">Choose quantity:</label>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                        {/* increment or decrement quantity */}
                        <div className="flex items-center">
                            <button onClick={()=>{dispatch(decreaseQuantity(item.id))}} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.quantity} required />
                            <button onClick={()=>{dispatch(increaseQuantity(item.id))}} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">₹{price}</p>
                        </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-1 md:order-2 md:max-w-md">
                        <p className="text-base font-medium text-gray-900">{item.item_name}</p>
                        <p className="text-base font-sm text-gray-900">{item.description}</p>

                        <div className="flex items-center gap-4">
                            <button onClick={()=>{dispatch(removeFromCart(item.id))}} type="button" className="inline-flex items-center text-sm font-medium text-[#a70b0b] hover:underline">
                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
