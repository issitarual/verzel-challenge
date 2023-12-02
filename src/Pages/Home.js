import Header from "../Components/Header";
import DrawerMenu from "../Components/Drawer";
import * as React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const drawerWidth = 240;
  return (
    <>
      <Header open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
      <DrawerMenu open={open} setOpen={setOpen} drawerWidth={drawerWidth}/>
    </>
  );
}
