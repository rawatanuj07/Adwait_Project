"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { set } from "mongoose";
import SDdown from "../stickyNav_ddown/page";

// Run the following command in your terminal:
// npm install --save-dev @types/heroicons__react

// Run the following command in your terminal:
// npm install @headlessui/react @heroicons/react
const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 90px;
  height: 26px;
  margin-right: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding-left: 0px;
  margin-right: 800px;
  margin-left: -45px;
  font-color: gray;
  height: 36px;
  border: 1px solid grey;
`;

const SearchField = styled.input`
  border: none;
  background-color: transparent;
  width: 200px;
  padding: 5px;
  margin-left: 0px;
`;

const SearchButton = styled.button`
  background-color: #fdd7ab;
  color: black;
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const LoginButton = styled.button`
  background-color: #ea580a;
  color: #white;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  margin-left: 10px;
  cursor: pointer;
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 8px;
`;

const StickyNavbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src="/assets/logo.png" alt="Logo" />
      </LogoContainer>

      <SDdown />

      <SearchContainer>
        <SearchField type="text" placeholder="Search" />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchContainer>

      <LoginButton>Login</LoginButton>
    </NavbarContainer>
  );
};

export default StickyNavbar;
