"use client";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Main() {
  const [heading, setHeading] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
    )
      .then((response) => response.json())
      .then((data) => {
        // Filter the data to select items where "parent" is equal to 0
        console.log("MAIn is", data.details.title);
        setHeading(data.details.title);
        setSubtitle(data.details.subtitle);
        console.log("subtitle is", data.details.subtitle);
        setDescription(data.details.description);
        console.log("MAInMAIn is", data[1]);
      });
  }, []);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const iconStyle = {
    display: "inline-block",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    color: "#fff",
    textAlign: "center",
    lineHeight: "40px",
    marginRight: "40px",
    marginTop: "10px",

  };
  const icons = [
    { Component: FaFacebookF, color: "#3b5998" },
    { Component: FaTwitter, color: "#1da1f2" },
    { Component: FaWhatsapp, color: "#25d366" },
    { Component: FaLinkedinIn, color: "#0077b5" },
  ];
  return (
    <div className="mx-5">
      <h1 className="font-bold text-2xl my-4 py-2">{heading}</h1>
      <div style={{ display: "flex" }}>
        <img src="/assets/image.jpg" alt="Example Image" />
        
        <div>
          <h1
            style={{ display: "flex", marginLeft: "200px " }}
            className="font-normal text-2xl my-4 py-2"
          >
            {subtitle}
          </h1>
          <h1 style={{ display: "flex", marginLeft: "200px " }}>
            {description}
          </h1>
        </div>
      </div>




      {/* SOCIAL_ICONS  START*/}
      <div >
      <h1 style={{ marginLeft: "10px ", marginTop: "10px" }}>Share this series:</h1>

          {icons.map(({ Component, color }, index) => (
            <a
              href="#"
              key={index}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Component 
                style={{
                  ...iconStyle,
                  backgroundColor: hoveredIcon === index ? color : "#fff",
                  color: hoveredIcon === index ? "#fff" : color,
                  // height: "35px", width: "35px "
                }}
              />
            </a>
          ))}
        </div>
    </div>
  );
}
