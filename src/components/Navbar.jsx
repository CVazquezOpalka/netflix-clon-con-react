import React, { useState } from "react";
import styled from "styled-components";

export const Navbar = ({ isScrolled }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "My List", link: "/mylist" },
    { name: "Profile", link: "/profile" },
  ];
  return (
    <Container>
      <nav className={`navbar${isScrolled ? " scrolled" : ""}`}></nav>
    </Container>
  );
};

const Container = styled.div``;
