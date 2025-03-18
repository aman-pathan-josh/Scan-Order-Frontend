import MenuItemCard from "./components/MenuItemCard"
import OrderSummary from "./components/OrderSummary"
import { useDispatch, useSelector } from "react-redux";
import { usePlaceOrderMutation } from "@/redux/apis/orderApi";
import { Link, useNavigate } from "react-router-dom";
import food_cart from '../../assets/images/food_cart.svg';
import { emptyCart } from "@/redux/slices/cartSlice";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import useRestaurantDetails from "@/customHooks/useRestaurantDetails";

export default function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    const cartTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const {restaurantId, restaurantTableId} = useRestaurantDetails();
    
    const [placeOrder, { isError, isSuccess, isLoading, error }] = usePlaceOrderMutation();

    const handlePlaceOrder = async () => {
        try {
            const orderData = {
                restaurant_table_id: restaurantTableId,
                order_amount: cartTotalPrice,
                menu_items: cartItems.map((item) => ({
                    menu_item_id: item.id,
                    quantity: item.quantity,
                    total_price: Number(item.price) * Number(item.quantity)
                })),
            };
    
            const response = await placeOrder({ restaurantId, orderData }).unwrap();
            console.log("Order Response:", response);
    
            dispatch(emptyCart());
            toast.success("Order placed successfully!");
        } catch (err) {
            toast.error("Failed to place order",err);
        }
    };
    

    return (
        <>
            {cartItems.length === 0 ?
                <section className="bg-[#F9FAFB] antialiased md:py-8">
                    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 px-4 md:px-6">
                        <div className="flex flex-col items-center gap-4">
                            <img src={food_cart} />
                            <h2 className="text-2xl font-bold">Your cart is <span className="text-[#d00000]">Empty!</span></h2>
                            <p className="text-gray-500 text-center max-w-md">
                                It looks like you haven't added any menu items to your cart yet. Add some menu items to your cart.
                            </p>
                        </div>
                        <button
                            onClick={()=>navigate(-1)}
                            className="inline-flex h-10 items-center justify-center rounded-md bg-[#FCC046] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#ffd166] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </section>
                :
                <section className="bg-[#F9FAFB] py-2 antialiased md:py-8">
                    {isLoading && <p>Placing order...</p>}
                    {isError && <p style={{ color: "red" }}>Error placing order</p>}
                    {isSuccess && <p style={{ color: "green" }}>Order placed successfully!</p>}

                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Your Order Cart</h2>
                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    {/* menu_item */}
                                    {cartItems.map((item) => (
                                        <MenuItemCard item={item} key={item.id} />
                                    ))
                                    }
                                </div>
                            </div>
                            <OrderSummary cartTotalPrice={cartTotalPrice} handlePlaceOrder={handlePlaceOrder} />
                        </div>
                    </div>
                </section>
            }
        </>)
}
