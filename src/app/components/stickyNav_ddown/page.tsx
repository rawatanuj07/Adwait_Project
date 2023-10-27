"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { set } from "mongoose";

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
  border: 1px solid grey;
  width: auto;
  margin-left: 9px;
  height: 36px;
  margin-right: -14px;
  paddiing-right: 0px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  color: black;
`;

// const DropdownOption = styled.a`
//   color: #fff;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// `;

const SDdown = () => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [englishValues, setEnglishValues] = useState([]); // State to store English values from the API
  const [parentOn, setParentOn] = useState([]); // State to store English values from the API
  console.log("parentOnesss is", parentOn);
  const [parent3, setParent3] = useState([]);
  const [parent4, setParent4] = useState([]);
  const [parent5, setParent5] = useState([]);
  const [parent6, setParent6] = useState([]);

  useEffect(() => {
    fetch("https://api.acharyaprashant.org/v2/legacy/courses/tags")
      .then((response) => response.json())
      .then((data) => {
        // Filter the data to select items where "parent" is equal to 0
        console.log("receivedData is", data[0]);
        console.log("secondData is", data[1]);
        let fdata = data[0];
        let odata = data[1];
        const filteredData = fdata.filter(
          (item: { parent: number }) => item.parent === 0
        );

        // Extract the  first-Level dropdown items from the filtered data
        const englishValues = filteredData.map(
          (item: { name: { english: any } }) => item.name.english
        );
        setEnglishValues(englishValues); // Now, englishValues contains an array of "english" values for items where "parent" is 0

        // Extract the nested items where "parent" is 1, for the first element of "first-Level dropdown"
        const ffilteredData = odata.filter(
          (item: { parent: number }) => item.parent === 1
        );
        console.log("ffilteredData is", ffilteredData);
        const parentOne = ffilteredData.map(
          (item: { name: { english: any } }) => item.name.english
        );
        setParentOn(parentOne); // Update state with English values
        console.log("parentOne is", parentOne);

        //Extract the nested items where "parent" is 3, for the first element of "first-Level dropdown"
        const filteredData3 = odata.filter(
          (item: { parent: number }) => item.parent === 3
        );
        console.log("filteredData3 is", filteredData3);
        const parentThree = filteredData3.map(
          (item: { name: { english: any } }) => item.name.english
        );
        setParent3(parentThree); // Update state with English values
        console.log("parentThree is", parentThree);

        //Extract the nested items where "parent" is 4, for the first element of "first-Level dropdown"
        const filteredData4 = odata.filter(
          (item: { parent: number }) => item.parent === 4
        );
        console.log("filteredData4 is", filteredData4);
        const parentFour = filteredData4.map(
          (item: { name: { english: any } }) => item.name.english
        );
        setParent4(parentFour); // Update state with English values
        console.log("parentFour is", parentFour);

        //Extract the nested items where "parent" is 5, for the first element of "first-Level dropdown"
        const filteredData5 = odata.filter(
          (item: { parent: number }) => item.parent === 5
        );
        console.log("filteredData5 is", filteredData5);
        const parentFive = filteredData5.map(
          (item: { name: { english: any } }) => item.name.english
        );
        setParent5(parentFive); // Update state with English values
        console.log("parentFive is", parentFive);

        //Extract the nested items where "parent" is 5, for the first element of "first-Level dropdown"
        const filteredData6 = odata.filter(
          (item: { parent: number }) => item.parent === 6
        );
        console.log("filteredData6 is", filteredData6);
        const parentSix = filteredData6.map(
          (item: { name: { english: any } }) => item.name.english
        );
        setParent6(parentSix); // Update state with English values
        console.log("parentSix is", parentSix);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <DropdownContainer>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            All
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-100 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    All
                  </a>
                )}
              </Menu.Item>

              {englishValues.map((value, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm relative group"
                      )}
                    >
                      {value}
                      {index == 0 && (
                        <div className="absolute left-full top-0 mt-2 py-1 px-2 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
                          {" "}
                          {/* Position the nested items */}
                          {parentOn.map((nestedItem, nestedIndex) => (
                            <Menu.Item key={nestedIndex}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {nestedItem}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      )}

                      {index == 2 && (
                        <div className="absolute left-full top-0 mt-2 py-1 px-2 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
                          {" "}
                          {/* Position the nested items */}
                          {parent3.map((nestedItem, nestedIndex) => (
                            <Menu.Item key={nestedIndex}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {nestedItem}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      )}

                      {index == 3 && (
                        <div className="absolute left-full top-0 mt-2 py-1 px-2 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
                          {" "}
                          {/* Position the nested items */}
                          {parent4.map((nestedItem, nestedIndex) => (
                            <Menu.Item key={nestedIndex}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {nestedItem}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      )}



{index == 4 && (
                        <div className="absolute left-full top-0 mt-2 py-1 px-2 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
                          {" "}
                          {/* Position the nested items */}
                          {parent5.map((nestedItem, nestedIndex) => (
                            <Menu.Item key={nestedIndex}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {nestedItem}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      )}


{index == 5 && (
                        <div className="absolute left-full top-0 mt-2 py-1 px-2 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
                          {" "}
                          {/* Position the nested items */}
                          {parent6.map((nestedItem, nestedIndex) => (
                            <Menu.Item key={nestedIndex}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {nestedItem}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      )}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </DropdownContainer>
  );
};

export default SDdown;
