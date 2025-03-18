import { useGetOrdersQuery } from "@/redux/apis/orderApi";
import { Link } from "react-router-dom";
import OrderStatus from "./OrderStatus";
import useRestaurantDetails from "@/customHooks/useRestaurantDetails";
import OrderNotFound from "./OrderNotFound";
import { Badge } from "../../../components/ui/badge";

const OrdersList = () => {
  const statusColors = {
    preparing: "bg-red-500 text-white",
    pending: "bg-yellow-500 text-black",
    served: "bg-blue-500 text-white",
    completed: "bg-green-500 text-white",
  };

  const { restaurantId, restaurantTableId } = useRestaurantDetails();
  const { data, isLoading, error } = useGetOrdersQuery(restaurantId,
    {
      pollingInterval: 5000
    }
  );

  if (isLoading) return <p className="text-center text-gray-600">Loading orders...</p>;
  if (error) return <p className="text-center text-red-600">
    <OrderNotFound />
  </p>;

  return (
    <div className="container mx-auto p-4">
      {data?.length ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Orders</h2>
          <ul className="space-y-4">
            {data.map((order) => (
              <li
                key={order.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <span className="text-lg font-semibold text-gray-700">Order #{order.id}</span>
                    <p className="text-sm text-gray-500">
                      Placed on: {new Date(order.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-md font-semibold">Status:
                      <Badge className={`ml-2 px-3 py-1 rounded-full text-sm capitalize font-medium ${statusColors[order?.order_status]}`}>
                        {(order.order_status)}
                      </Badge>
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-md font-medium text-gray-700 mb-2">Items:</h3>
                  <ul className="space-y-2">
                    {!order ?
                      <OrderNotFound />
                      : order.order_carts.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                          <span className="text-gray-600">
                            {item.menu_item.item_name} (x{item.quantity})
                          </span>
                          <span className="text-gray-800 font-medium">
                            ₹{(item.total_amount)}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-lg font-semibold text-gray-800">Total Amount:</span>
                  <span className="text-lg font-bold text-gray-800">
                    ₹{(order.order_amount)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <OrderNotFound />
      )}
    </div>
  );
};

export default OrdersList;
