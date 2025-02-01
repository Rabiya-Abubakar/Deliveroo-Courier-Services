// constants.js

// API Base URL
export const API_URL = "https://your-api-url.com"; // Replace with your API base URL

// API Endpoints
export const API_ENDPOINTS = {
  GET_ORDERS: "/orders",
  GET_ORDER_DETAILS: "/orders/:orderId",
  CREATE_ORDER: "/orders",
  UPDATE_ORDER: "/orders/:orderId",
  DELETE_ORDER: "/orders/:orderId",
  GET_USER: "/users/:userId",
};

// Action Types (for Redux or similar state management)
export const ACTION_TYPES = {
  FETCH_ORDERS_REQUEST: "FETCH_ORDERS_REQUEST",
  FETCH_ORDERS_SUCCESS: "FETCH_ORDERS_SUCCESS",
  FETCH_ORDERS_FAILURE: "FETCH_ORDERS_FAILURE",
  CREATE_ORDER_REQUEST: "CREATE_ORDER_REQUEST",
  CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
  CREATE_ORDER_FAILURE: "CREATE_ORDER_FAILURE",
  UPDATE_ORDER_REQUEST: "UPDATE_ORDER_REQUEST",
  UPDATE_ORDER_SUCCESS: "UPDATE_ORDER_SUCCESS",
  UPDATE_ORDER_FAILURE: "UPDATE_ORDER_FAILURE",
  DELETE_ORDER_REQUEST: "DELETE_ORDER_REQUEST",
  DELETE_ORDER_SUCCESS: "DELETE_ORDER_SUCCESS",
  DELETE_ORDER_FAILURE: "DELETE_ORDER_FAILURE",
};

// User roles
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

// Status Codes
export const STATUS_CODES = {
  PENDING: "pending",
  DELIVERED: "delivered",
  CANCELED: "canceled",
};

// Application Constants
export const APP_CONSTANTS = {
  APP_NAME: "DeliverOO",
  VERSION: "1.0.0",
};

// Miscellaneous
export const MISC = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB in bytes (for file uploads)
  ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/gif"],
};
