import { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const updateOrder = (orderId, updatedData) => {
    setOrders(orders.map(order => order.id === orderId ? { ...order, ...updatedData } : order));
  };

  const removeOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);