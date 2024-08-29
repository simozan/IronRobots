import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RobotCard } from "../components/RobotCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [robots, setRobots] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSelect = (e) => setPriceFilter(e.target.value);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
      .get("https://robots-api.adaptable.app/all-robots")
      .then((response) => {
        console.log("response data", response.data);
        setRobots(response.data); 
      })
      .catch((error) => console.error("Error fetching search results:", error));
  }, []);

  const filteredRobot = robots
  .filter(
    (aRobot) =>
      aRobot.Name && 
      aRobot.Name.toLowerCase().includes(searchTerm.toLowerCase())
  )
    .filter((robot) => {
      if (priceFilter === "above") {
        return robot.Price > 500;
      } else if (priceFilter === "below") {
        return robot.Price <= 500;
      }
      return true;
    });

  const sortByName = () => {
    const sortedRobots = [...filteredRobot].sort((a, b) =>
      a.Name.localeCompare(b.Name)
    );
    setRobots(sortedRobots);
  };

  const sortByPrice = () => {
    const sortedProfiles2 = [...filteredRobot].sort((a, b) => a.Price - b.Price);
    setRobots(sortedProfiles2);
  };

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <br />
      <br />
      <button onClick={sortByName}>Alphabetic Order</button>
      <br />
      <br />
      <button onClick={sortByPrice}>Price Order</button>
      <br />
      <br />
      <select value={priceFilter} onChange={handleSelect}>
        <option value="">Select Price Filter</option>
        <option value="above">Above 500</option>
        <option value="below">Below 500</option>
      </select>
      {filteredRobot.map((eachrobot) => (
        <RobotCard robot={eachrobot} key={eachrobot.id} />
      ))}
      <Link to="/new-robot">
        <button>Create a new Robot</button>
      </Link>
    </>
  );
};
