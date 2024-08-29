import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddRobotPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();   

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { Name: name, Price: price, Description: description };
    axios
      .post("https://robots-api.adaptable.app/create-robot", body) 
      .then((response) => {
        console.log("Robot added successfully:", response.data);
        setName("");
        setPrice("");
        setDescription("");
        navigate('/')
      })
      .catch((error) => {
        console.error("Error creating robot:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="number"
          name="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
