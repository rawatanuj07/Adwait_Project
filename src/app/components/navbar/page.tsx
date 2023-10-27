"use client";
import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #d24115;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;
  height: 46px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 40px;
  height: auto;
  margin-right: 20px;
`;

const PageLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
const RedCircle = styled.div`
  width: 1.1rem; /* Adjust the size as needed */
  height: 1.1rem; /* Adjust the size as needed */
  background-color: #f00; /* Red color */
  border: 1px solid #fff; /* White border */
  border-radius: 50%; /* Rounded shape */
  margin-left: 406px;
  margin-right: -410px;
`;
const Page = styled.li`
  margin: 0 15px;
  height: 100%;
  cursor: pointer;
  color: white;
  padding: 0px 0px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${(props: any) =>
    props.pname === "Video Series"
      ? "#ea580a"
      : props.selected
      ? "#ea580a"
      : "transparent"};
`;

const Dropdown = styled.div`
  position: relative;
  margin: 0 15px;
  cursor: pointer;
`;
const DropdownOptions = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  background: white;
  padding: 10px;
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const Option = styled.li`
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #ea580a;
    color: white;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CallButton = styled.button`
  background-color: #ea580a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
`;
const DropdownArrow = styled.div`
  margin-left: -10px;
`;
const SidebarButton = styled.div`
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e2a3b;
  padding: 20px;
  height: 60px;
`;

const MainHeading = styled.h1`
  color: white;
  font-size: 21px;
  margin: 0;
  text-align: center;
  flex: 1;
`;

const RightButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  width: auto;
`;
const Navbar = () => {
  // Use state to keep track of the selected page with a default value of 3
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <div>
      <NavbarContainer>
        <LeftContainer>
          <Logo src="/your-logo.png" alt="Logo" />
          <PageLinks>
            <Page onClick={() => setSelectedPage(1)}>Home</Page>
            <Dropdown onClick={() => setSelectedPage(2)}>
            
              {" "}
              
              Live Sessions{" "}
              <DropdownOptions>
                <Option>Option 1</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
              </DropdownOptions>
              
            </Dropdown>
            <DropdownArrow>&#9662;</DropdownArrow>
          
            <Page onClick={() => setSelectedPage(3)} pname="Video Series">
              Video Series
            </Page>
            <Page onClick={() => setSelectedPage(4)}>AP Books</Page>
            <Page onClick={() => setSelectedPage(5)}>AP Articles</Page>

            <Dropdown onClick={() => setSelectedPage(6)}>Invite</Dropdown>
            <DropdownArrow>&#9662;</DropdownArrow>

            <Page onClick={() => setSelectedPage(7)}>Media</Page>
            <Page onClick={() => setSelectedPage(8)}>Donate</Page>
          </PageLinks>
        </LeftContainer>
        <RightContainer>
          <CallButton>Call</CallButton>
          <Dropdown>
            <DropdownArrow>&#9662;</DropdownArrow>
          </Dropdown>
          <SidebarButton>&#9776;</SidebarButton>
        </RightContainer>
      </NavbarContainer>
      <Content>
        <RedCircle className="mr-2 mt-0.5 shrink-0 laptop:mt-0"></RedCircle>
        <MainHeading>
          Get access to all 350+ video series at once!
          <RightButton>Click Here</RightButton>
        </MainHeading>
      </Content>
    </div>
  );
};

export default Navbar;
