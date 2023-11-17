"use client";

import { useState } from "react";
import { Button, Logo, Navb } from "./Navbar.styles";
import { BsCart4 } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleShowSidebar = () => setSidebar(!sidebar);

  return (
    <Navb>
      <Logo>
        <h1>Fake Modern Store</h1>
      </Logo>

      <Button onClick={handleShowSidebar}>
        <BsCart4 />
        <p>{totalItems}</p>
      </Button>

      {sidebar && <Sidebar active={setSidebar} />}
    </Navb>
  );
};

export default Navbar;
