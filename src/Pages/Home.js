import * as React from "react";
import carsList from "../Utils/CarsList";
import CarCard from "../Components/CarCard";

export default function Home() {
  function sortByPrice(car) {
    return car.sort(function(a, b) {
      return a.price < b.price ? -1 : (a.price > b.price) ? 1 : 0;
    });
  }
  return (
    <React.Fragment>
      {sortByPrice(carsList).map((c) => (
        <CarCard car={c} key={c.id} />
      ))}
    </React.Fragment>
  );
}
