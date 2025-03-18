import React, { useState } from "react";
import { useAddReviewMutation } from "@/redux/apis/reviewsApi";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import toast from "react-hot-toast";

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffd166',
  },
});

const AddReview = ({ menu_item_id,refetch }) => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const [addReview, { isLoading}] = useAddReviewMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview({ menu_item_id: menu_item_id, rating:rating, comment:comment }).unwrap();
      setRating(null);
      setComment("");
      refetch();
      toast.success("Review has been added")
    } catch (error) {
      toast.error("Failed to submit review");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-md p-4">
        <h2 className="w-full text-2xl font-bold mb-6 text-gray-800">Add Review</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <StyledRating
              name="customized-color"
              value={rating}
              precision={0.5}
              icon={<StarRoundedIcon fontSize="inherit" className="text-yellow-500" />}
              emptyIcon={<StarRoundedIcon fontSize="inherit" className="text-gray-300" />}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              className="text-3xl"
            />
          </div>

          {/* Comment Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your comment..."
              rows="2"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !rating} // Disable if rating is not selected
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddReview;
