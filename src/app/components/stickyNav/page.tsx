"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';

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

const Dropdown = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  border-radius: 4px;
  z-index: 0;
`;

const DropdownContainer = styled(Dropdown)`
  &:hover ${DropdownContent} {
    display: block;
  };
  border: 1px solid grey;
  width: 60px;
  margin-left: 9px;
  height: 36px;
  margin-right: -14px;
  paddiing-right: 0px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  color: black;

`;

const DropdownOption = styled.a`
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
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
const DropdownArrow = styled.div`
  margin-left: 10px;
`;
const SearchIcon = styled(FaSearch)`
  margin-right: 8px;
`;


const StickyNavbar = () => {
    const [englishValues, setEnglishValues] = useState([]); // State to store English values from the API

    useEffect(() => {
        fetch('https://api.acharyaprashant.org/v2/legacy/courses/tags')
      .then(response => response.json())
      .then(data => {
        // Filter the data to select items where "parent" is equal to 0
        console.log("receivedData is", data[0]);
        let fdata=data[0];
        const filteredData = fdata.filter((item: { parent: number; }) => item.parent === 0);
    
        // Extract the "english" values from the filtered data
        const englishValues = filteredData.map((item: { name: { english: any; }; }) => item.name.english);
        setEnglishValues(englishValues); // Update state with English values

        // Now, englishValues contains an array of "english" values for items where "parent" is 0
        console.log("english are", englishValues);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      },[]);
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src="/assets/logo.png" alt="Logo" />
      </LogoContainer>

      <DropdownContainer>
        <DropdownArrow>All &#9662;</DropdownArrow>
        <DropdownContent>
          <DropdownOption href="#">All</DropdownOption>
          {englishValues.map((value, index) => (
            <DropdownOption key={index} href="#">
              {value}
            </DropdownOption>
          ))}
        </DropdownContent>
      </DropdownContainer>
      <SearchContainer>
        <SearchField type="text" placeholder="Search" />
        <SearchButton><SearchIcon/></SearchButton>
      </SearchContainer>

      <LoginButton>Login</LoginButton>
    </NavbarContainer>
  );
};

export default StickyNavbar;
