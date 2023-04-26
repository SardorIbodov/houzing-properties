import React, { createContext, useContext, useReducer } from "react";

import House1 from "../../../assets/house1.png";
import House2 from "../../../assets/house2.png";
import House3 from "../../../assets/house3.png";
import Profile1 from "../../../assets/profile1.svg";
import Profile2 from "../../../assets/profile2.svg";
import Profile3 from "../../../assets/profile3.svg";

const CardContext = createContext();
export const Cards = () => useContext(CardContext);

export const CardList = ({ children }) => {
  const [data, dispatch] = useReducer(() => {}, [
    {
      id: 1,
      houseImage: House1,
      profileImage: Profile1,
      beds: "4 Beds",
      baths: "5 Baths",
      garage: "1 Garage",
      area: "1200 Sq Ft",
    },
    {
      id: 2,
      houseImage: House2,
      profileImage: Profile2,
      beds: "4 Beds",
      baths: "5 Baths",
      garage: "1 Garage",
      area: "1200 Sq Ft",
    },
    {
      id: 3,
      houseImage: House3,
      profileImage: Profile3,
      beds: "4 Beds",
      baths: "5 Baths",
      garage: "1 Garage",
      area: "1200 Sq Ft",
    },
    {
      id: 4,
      houseImage: House1,
      profileImage: Profile1,
      beds: "4 Beds",
      baths: "5 Baths",
      garage: "1 Garage",
      area: "1200 Sq Ft",
    },
    {
      id: 5,
      houseImage: House2,
      profileImage: Profile2,
      beds: "4 Beds",
      baths: "5 Baths",
      garage: "1 Garage",
      area: "1200 Sq Ft",
    },
    {
      id: 6,
      houseImage: House3,
      profileImage: Profile3,
      beds: "4 Beds",
      baths: "5 Baths",
      garage: "1 Garage",
      area: "1200 Sq Ft",
    },
  ]);

  return (
    <CardContext.Provider value={[data, dispatch]}>
      {children}
    </CardContext.Provider>
  );
};
