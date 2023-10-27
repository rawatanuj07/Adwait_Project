"use client";
import { useEffect, useState } from "react";

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

  return (
    <div className="mx-5">
      <h1 className="font-bold text-2xl my-4 py-2">{heading}</h1>
      <div style={{ display: "flex" }}>
        
        <img src="/assets/image.jpg" alt="Example Image" />
        <div >
        <h1 style={{ display: "flex", marginLeft: "200px " }} className="font-normal text-2xl my-4 py-2">{subtitle}</h1>
        <h1 style={{ display: "flex", marginLeft: "200px " }}>{description}</h1>
        </div>
      </div>
    </div>
  );
}
