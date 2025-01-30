// api.js
import { API_URL, } from './constants';



//const API_URL = "https://your-api-url.com"; // Replace with your backend URL

// Helper function to handle GET requests
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Error: ", error);
    throw error;
  }
};

// Helper function to handle POST requests
export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Post Error: ", error);
    throw error;
  }
};

// Helper function to handle PUT requests
export const putData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Put Error: ", error);
    throw error;
  }
};

// Helper function to handle DELETE requests
export const deleteData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Delete Error: ", error);
    throw error;
  }
};
