import React, { useState, useEffect } from "react";
import "./Form.css";

const RestaurantForm = ({ initialData = {}, onSubmit }) => {
  const [name, setName] = useState((initialData && initialData.name) || "");
  const [description, setDescription] = useState(
    (initialData && initialData.description) || ""
  );
  const [location, setLocation] = useState(
    (initialData && initialData.location) || ""
  );
  //   const [payment, setPayment] = useState(
  //     (initialData && initialData.payment) || ""
  //   );

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setLocation(initialData.location || "");
    }
    // setPayment(initialData.payment || "");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, location });
  };

  return (
    <div className="form-container">
      <form className="styled-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add Restaurant</h2>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            required
          />
        </div>
        {/* <div className="form-group">
          <select multiple id="dropdown" name="dropdown">
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div> */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;
