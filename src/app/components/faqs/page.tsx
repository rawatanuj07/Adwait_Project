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

    <div style={{
    height: "auto",
    marginTop: "40px",
    marginBottom: "40px",
    }}>

      <h1 style={{
    height: "auto",
    marginLeft: "40px",
    marginTop: "40px",
    marginBottom: "0px",
    }}>FAQs</h1>
      <h1>Can’t find the answer you’re looking for? Reach out to our support team.</h1>
    <div style={{
        marginLeft: "40%",
        marginRight: "auto",
       width: "700px",
       marginTop: "40px",
       marginBottom: "40px",
      }}>
        
      {accordion.map((faqss: any) => (
        <Accordion key={faqss.question}>
          <AccordionItem style={{
      
       marginTop: "40px",
       marginBottom: "40px",
      }} key={faqss.id} title={faqss.question}

          >
            {faqss.answer.replace(/<\/?p>/g, "")}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
    </div>

  );
}
