// import { useGetOrderStatusQuery } from "@/redux/apis/orderApi";

// const OrderStatus = ({ order_id }) => {
//   const { data, isLoading, error } = useGetOrderStatusQuery(order_id, {
//     pollingInterval: 10000,
//   });

//   if (isLoading) return <p>Loading order status...</p>;
//   if (error) return <p>Error fetching order status.</p>;
//   console.log(data);
  
//   return (
//     <div>
//       <p><strong>Status:</strong> {data.order_status}</p>
//     </div>
//   );
// };

// export default OrderStatus;
