"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

type YourCourseType = {
  question: string;
  answer: string;
};

export default function Faq() {
  const [accordion, setAccordion] = useState<YourCourseType[]>([]);
  useEffect(() => {
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Akordion is", data);
        setAccordion(data);
      });
  }, []);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionClick = (id: string) => {
    if (id === openAccordion) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };
  return (
    <div
      style={{
        height: "auto",
        marginTop: "43px",
        marginBottom: "43px",
      }}
    >
      {/*  ACCORDION STARTS */}
      <div
        style={{
          marginLeft: "40%",
          marginRight: "auto",
          width: "700px",
       
        }}
      >
        <div
          style={{
            width: "400px",
            marginLeft: "-70%",
            paddingTop: "10px",
            marginBottom: "-200px",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "50px",
            }}
          >
            FAQs
          </h1>
          <h1
            style={{
              marginTop: "10px",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            Can’t find the answer you’re looking for?
          </h1>
          <h1> Reach out to our <a href="https://acharyaprashant.org/en/technical-support" style={{ color: "#de6b1f" }}>support</a> team.</h1>        </div>
        {accordion.map((faqss: any, index: number) => (
          <Accordion key={faqss.question}>
            <AccordionItem
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                borderBottom: index !== accordion.length - 1 ? "0.5px solid #ccc" : "",
                paddingBottom: "20px",
              }}
              key={faqss.id}
              title={faqss.question}
            >
              {faqss.answer.replace(/<\/?p>/g, "")}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      {/*  ACCORDION Ends */}
      
    </div>
    
  );
}
