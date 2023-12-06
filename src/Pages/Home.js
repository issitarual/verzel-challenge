import * as React from "react";
import CarCard from "../Components/CarCard";
import axios from "axios";
import Loading from "../Components/Loading";
import { MainContainer } from "../styles/components";

export default function Home() {
  const [car, setCar] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/car`)
      .then((success) => {
        setCar(success.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Algo deu errado, tente novamente!");
        console.log(error);
      });
  }, []);

  function sortByPrice(car) {
    return car.sort(function (a, b) {
      return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <MainContainer>
      {sortByPrice(car).map((c) => (
        <CarCard car={c} key={c.id} />
      ))}
    </MainContainer>
  );
}
