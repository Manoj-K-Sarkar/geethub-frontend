import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>

    </nav>
    // <AppBar>
    //   <Toolbar>
    //     <Button color="inherit">
    //       <Link href="/">Home</Link>
    //     </Button>
    //     <Button color="inherit">
    //       <Link href="/about">About</Link>
    //     </Button>
    //   </Toolbar>
    // </AppBar>
  );
};

export default Nav;
