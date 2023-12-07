import React from "react";
import OrderTable from "../Components/Table";
import Typography from "@mui/material/Typography";
import axios from "axios";
import UserContext from "../Context/UserContext";
import Loading from "../Components/Loading";
import { FormContainer } from "../styles/components";

export default function Order() {
  const ORDER = "Lista de pedidos";
  const NOT_ORDER = "Nenhum pedido encontrado";

  const { user } = React.useContext(UserContext);

  const [loading, setLoading] = React.useState(true);
  const [order, setOrder] = React.useState([]);

  const fetchGetOrder = async () => {
    await axios
      .get(`http://127.0.0.1:8000/order/${user.id}`)
      .then((success) => {
        setOrder(success.data);
      })
      .catch((error) => {
        alert("Algo deu errado, tente novamente!");
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchGetOrder();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <FormContainer>
      <Typography variant="h6" gutterBottom={true}>
        {ORDER}
      </Typography>
      {order.length ? <OrderTable order={order} /> : NOT_ORDER}
    </FormContainer>
  );
}
