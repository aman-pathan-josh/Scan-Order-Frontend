import { useGetReviewsQuery } from "@/redux/apis/reviewsApi";
import UpdateReview from "./UpdateReview";
import DeleteReview from "./DeleteReview";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddReview from "./AddReview";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ffd166',
    },
});
const ReviewsList = ({ menu_item_id, menu_item_data }) => {

    const [open, setOpen] = useState(false);

    const { data: reviews, error, isLoading, refetch } = useGetReviewsQuery(menu_item_id, {
        pollingInterval: 15000,
    });
    const rating_sum = reviews?.reduce((total, review) => total + Number(review.rating), 0);

    const user_data = JSON.parse(localStorage.getItem("user"));
    const user_id = user_data?.id;  
    const dispatch = useDispatch();
    if (isLoading) return <p>Loading reviews...</p>;
    if (error) return <p>Error loading reviews.</p>;
    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-col max-w-3xl mx-auto bg-transparent gap-10">
                    {/* <h2 className="text-2xl font-bold mb-6 text-gray-800">Menu Item</h2> */}
                    <div className="flex justify-between items-center bg-white rounded-lg shadow p-4">
                        <div className="flex flex-row justify-center items-center">
                            <img
                                width={130}
                                height={130}
                                className=" rounded-lg"
                                // src="https://imgmediagumlet.lbb.in/media/2025/01/6790b9b0e59da653ef5df1de_1737537968281.jpg"
                                src={menu_item_data?.image_url}
                                alt="product image"
                            />
                            <div className="pl-6 pr-6 flex flex-col items-start justify-center">
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {menu_item_data?.item_name}
                                </h5>
                                <h5 className="text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                                    {menu_item_data?.description}
                                </h5>
                                <h5 className="text-md font-bold tracking-tight text-[#4152FF] dark:text-white">
                                    ₹ {menu_item_data?.price}
                                </h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-6 text-[#25a244] flex justify-between items-center">
                                <span className="text-base font-semibold tracking-tight text-gray-500 dark:text-white">Average Rating:</span>
                                &nbsp; {rating_sum ? (rating_sum / reviews.length).toFixed(1) : "NA"}
                                <span className="text-base font-semibold tracking-tight text-gray-500 dark:text-white">/5</span>
                            </h2>
                            <Button variant="outline" onClick={() => { dispatch(addToCart(menu_item_data)); toast.success("Item Added to Cart") }}>
                                <ShoppingCart /> Add to Cart
                            </Button>
                        </div>
                    </div>
                    <AddReview refetch={refetch} menu_item_id={menu_item_id} />

                    <div className="w-full mx-auto h-fit p-4 bg-white rounded-lg shadow">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex justify-between">
                            Customer Reviews
                            <span className="text-base font-semibold text-gray-400 underline">{reviews.length} reviews</span>
                        </h2>

                        <div className="space-y-6 mb-8">
                            {!reviews ? (
                                <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
                            ) : (
                                reviews.map(review => {                                    
                                    const date = new Date(review.created_at)
                                    return (
                                        <div key={review.id} className="border-b pb-4">
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-semibold">{review.user.first_name} {review.user.last_name}</p>
                                                    <span className="text-md text-gray-300">|</span>
                                                    <StyledRating
                                                        name="customized-color"
                                                        defaultValue={Number(review.rating)}
                                                        precision={0.5}
                                                        icon={<StarRoundedIcon fontSize="inherit" />}
                                                        emptyIcon={<StarRoundedIcon fontSize="inherit" />}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="flex gap-2">
                                                    {(review?.user?.id === user_id) && 
                                                        (<>
                                                            <Dialog open={open} onOpenChange={setOpen}>
                                                                <DialogTrigger className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Edit</DialogTrigger>
                                                                <DialogContent>
                                                                    <DialogHeader>
                                                                        <UpdateReview refetch={refetch} existingReview={review} setOpen={setOpen} />
                                                                    </DialogHeader>
                                                                </DialogContent>
                                                            </Dialog>
                                                            <DeleteReview review_id={review.id} />
                                                        </>)
                                                    }

                                                </div>
                                            </div>
                                            <p className="mt-2 text-gray-700 flex justify-between items-center">
                                                {review.comment}
                                                <span className="text-sm text-gray-400">posted on {date.toDateString().slice(4,)}</span>
                                            </p>
                                        </div>)
                                }
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ReviewsList;
