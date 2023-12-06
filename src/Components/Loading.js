import { Typography, CircularProgress } from "@mui/material";
import { LoadingContainer } from "../styles/components";

const Loading = () => {
  return (
    <LoadingContainer>
      <Typography variant="h5" gutterBottom>
        Carregando
      </Typography>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default Loading;