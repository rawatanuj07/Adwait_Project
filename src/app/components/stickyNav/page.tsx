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
  z-index: 100;
  border-radius: 0px 0px 10px 10px;
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
  margin-left: -25px;
  font-color: gray;
  height: 36px;
  `;
  // border-radius: 5px;
const SearchField = styled.input`
  border-top: 0.8px solid #9CA3AF;
  border-bottom: 0.5px solid #9CA3AF;
  color: black;
  width: 210px;
  padding: 5px;
  margin-left: 10px;
  text-indent: 5px;

`;

const SearchButton = styled.button`
  background-color: #fdd7ab;
  color: black;
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
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
  color: #555555;
`;
const NavbarWrapper = styled.div`
display: flex;
flex-direction: column;
position: sticky;
top: 0;
background-color: white;
z-index: 100;

`;
const StickyNavbar = () => {
  return (
    <NavbarWrapper>

    <NavbarContainer>

      <LogoContainer>
        <Logo src="/assets/logo.png" alt="Logo" />
      </LogoContainer>

      <SearchContainer>
        <SDdown />

        <SearchField type="text" placeholder="Search for video series"/>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchContainer>

      <LoginButton>Login</LoginButton>



    </NavbarContainer>
     <hr className="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2" />
     </NavbarWrapper>
    
  );
};

export default StickyNavbar;
