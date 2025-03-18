import React, { useState } from "react";
import { useUpdateReviewMutation } from "@/redux/apis/reviewsApi";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import toast from "react-hot-toast";

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffd166',
  },
});

const UpdateReview = ({ existingReview,setOpen,refetch }) => {
  const [rating, setRating] = useState(existingReview.rating);
  const [comment, setComment] = useState(existingReview.comment);
  const [updateReview, { isLoading }] = useUpdateReviewMutation();

  const handleUpdate = async () => {
    try {
      await updateReview({ review_id: existingReview.id, rating, comment,menu_item_id: existingReview.menu_item_id }).unwrap();
      setOpen(false);
      refetch();
      toast.success("Review has been updated!")
    } catch (error) {
      toast.error("Failed to update review");
    }
  };

  return (
    <>
      {/* <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"> */}
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Edit Review</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <StyledRating
            name="customized-color"
            defaultValue={existingReview.rating}
            precision={0.5}
            icon={<StarRoundedIcon fontSize="inherit" />}
            emptyIcon={<StarRoundedIcon fontSize="inherit" />}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="2"
            required
          />
        </div>

        <button
          onClick={handleUpdate}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Updating..." : "Update Review"}
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default UpdateReview;
