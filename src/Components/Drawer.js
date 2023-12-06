import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router";
import UserContext from "../Context/UserContext";
import { Typography } from "@mui/material";
import { Drawer, DrawerHeader } from "../styles/components";

const MENU = {
  home: "Home",
  account: "Perfil",
  addVehicle: "Cadastrar veículo",
  order: "Pedidos",
  logOut: "Sair",
};

const menuItems = [
  { name: MENU.home, icon: <HomeIcon />, link: "/" },
  { name: MENU.account, icon: <AccountCircleIcon />, link: "/profile" },
];

const menuUserItems = [
  ...menuItems,
  { name: MENU.order, icon: <ShoppingBagIcon />, link: "/order" },
  { name: MENU.logOut, icon: <LogoutIcon /> },
];

const menuItemsAdmin = [
  ...menuUserItems,
  { name: MENU.addVehicle, icon: <DirectionsCarIcon />, link: "/vehicle" },
];

export default function DrawerMenu({ open, setOpen, drawerWidth }) {
  let navigate = useNavigate();
  const theme = useTheme();
  const { user } = React.useContext(UserContext);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let menuArray = [];

  if (user && !user?.isUserAdmin) menuArray = menuUserItems;
  else if (user && user?.isUserAdmin) menuArray = menuItemsAdmin;
  else menuArray = menuItems;

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
        <DrawerHeader>
          <Typography>Menu</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuArray.map((i, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() =>
                i.name !== MENU.logOut ? navigate(i.link) : logout()
              }
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {i.icon}
                </ListItemIcon>
                <ListItemText primary={i.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
