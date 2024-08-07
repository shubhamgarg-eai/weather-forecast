const BASE_URL = 'https://66b3a1ab7fba54a5b7edab95.mockapi.io/api/restaurantdetails';

export const fetchRestaurants = async () => {
  const response = await fetch(BASE_URL);
  return await response.json();
};

export const createRestaurant = async (restaurant) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurant),
  });
  return await response.json();
};

export const updateRestaurant = async (id, restaurant) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurant),
  });
  return await response.json();
};

export const deleteRestaurant = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  };