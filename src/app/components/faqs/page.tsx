"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

type CardProps = {
    question: string;
    answer: string;
    
  };
  type YourCourseType = {
    question: string;
    answer: string;
    
  };


export default function Akordion() {
  const [faq, setFaq] = useState<YourCourseType[]>([]);
  useEffect(() => {
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi"
    )
      .then((response) => response.json())
      .then((data) => {
        // Filter the data to select items where "parent" is equal to 0
        console.log("Akordion is", data);
        setFaq(data);
        // setHeading(data.details.title);
        // setSubtitle(data.details.subtitle);
        // console.log("subtitle is", data.details.subtitle);
        // setDescription(data.details.description);
        // console.log("MAInMAIn is", data[1]);
      });
  }, []);
  
  return (
    <div>
      {faq.map((faqss: any) => (
        <Accordion key={faqss.question}>
          <AccordionItem key={faqss.id} title={faqss.question}
          >
            {faqss.answer.replace(/<\/?p>/g, "")}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
    
  );
}
