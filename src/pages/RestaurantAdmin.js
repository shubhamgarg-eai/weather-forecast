import React, { useState } from "react";
import RestaurantForm from "../components/molecules/RestaurantForm";
import RestaurantTable from "../components/organisms/RestaurantTable";
import Modal from "react-modal";
import Navbar from "./Navbar";
import { green } from "@mui/material/colors";

Modal.setAppElement("#root");

const RestaurantAdmin = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [restaurantId, setRestaurantId] = useState(1);

  const handleAdd = () => {
    setCurrentRestaurant(null);
    setModalIsOpen(true);
  };

  const handleEdit = (restaurant) => {
    setCurrentRestaurant(restaurant);
    setModalIsOpen(true);
  };

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  const handleSubmit = (restaurant) => {
    if (currentRestaurant) {
      setRestaurants(
        restaurants.map((r) =>
          r.id === currentRestaurant.id ? { ...r, ...restaurant } : r
        )
      );
    } else {
      setRestaurants([...restaurants, { ...restaurant, id: restaurantId }]);
      setRestaurantId(restaurantId + 1);
    }
    setModalIsOpen(false);
  };

  return (
    <div>
      <Navbar />
      <button
        style={{ margin: "10px", float: "left", backgroundColor: "#007bff87" }}
        onClick={handleAdd}
      >
        Add Restaurant
      </button>
      <br /> <br />
      <br />{" "}
      <RestaurantTable
        data={restaurants}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <RestaurantForm
          initialData={currentRestaurant}
          onSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
};

export default RestaurantAdmin;
