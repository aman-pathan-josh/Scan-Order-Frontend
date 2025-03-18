import React from "react";
import { useDeleteReviewMutation } from "@/redux/apis/reviewsApi";
import toast from "react-hot-toast";

const DeleteReview = ({ review_id }) => {
  const [deleteReview, { isLoading }] = useDeleteReviewMutation();

  const handleDelete = async () => {
    try {
      await deleteReview(review_id).unwrap();
      toast.success("Review has been deleted!");
    } catch (error) {
      toast.error("Failed to delete review");
    }
  };

  return (<button className="text-red-600 font-semibold hover:text-red-800 font-semibold text-sm" onClick={handleDelete} disabled={isLoading}>Delete</button>);
};

export default DeleteReview;
