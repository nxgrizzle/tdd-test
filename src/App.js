import React, { useState } from "react";
const App = () => {
  return (
    <div>
      <FilterableRestaurantTable />
    </div>
  );
};
export default App;

const FormStates = {
  VIEW: "view",
  EDIT: "edit",
};

export const RestaurantTable = ({ restaurants }) => {
  if (restaurants.length === 0) return <div>No restaurants</div>;
  return (
    <ul>
      {restaurants.map((restaurant) => {
        return (
          <li>
            {" "}
            <RestaurantRow key={restaurant.id} restaurant={restaurant.name} />
          </li>
        );
      })}
    </ul>
  );
};

export const RestaurantRow = ({ restaurant }) => {
  return <div data-testid="restaurantName">{restaurant}</div>;
};

export const RestaurantForm = ({ addRestaurant }) => {
  const [state, setState] = useState(FormStates.VIEW);
  const [restaurantName, setRestaurantName] = useState("");

  const handleAdd = () => {
    setState(FormStates.EDIT);
  };
  const handleChange = (e) => {
    setRestaurantName(e.target.value);
  };
  const handleEdit = () => {
    addRestaurant(restaurantName);
    setState(FormStates.VIEW);
    setRestaurantName("");
  };
  return (
    <div>
      <button onClick={handleAdd} data-testid="addRestaurantButton">
        Add Restaurant
      </button>
      {state === FormStates.EDIT ? (
        <div>
          <input
            onChange={handleChange}
            data-testid="newRestaurantName"
          ></input>
          <button onClick={handleEdit} data-testid="saveRestaurantButton">
            Save
          </button>
        </div>
      ) : null}
    </div>
  );
};

export const FilterableRestaurantTable = () => {
  const [restaurants, setRestaurants] = useState([]);
  const addRestaurant = (restaurant) => {
    setRestaurants((prev) => [
      ...prev,
      { name: restaurant, id: Math.random() * 10000000 },
    ]);
  };
  return (
    <div>
      <RestaurantForm addRestaurant={addRestaurant} />
      <RestaurantTable restaurants={restaurants} />
    </div>
  );
};
