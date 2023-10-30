"use client";
import { useEffect, useState, PropsWithChildren } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

type CardProps = {
  seq: number;
  title: string;
  subtitle: string;
  time: string;
  amount: string;
  originalAmount: string;
  language: string;
};
type YourCourseType = {
  seq: number;
  id: number;
  title: string;
  subtitle: string;
  courseHours: number;
  amount: number;
  originalAmount: number;
  language: string;
  series: {
    order: {
      seq: number;
    };
  };

  // Add other properties as needed
};
const Card = ({
  title,
  subtitle,
  time,
  amount,
  language,
  originalAmount,
  seq,
}: PropsWithChildren<CardProps>) => {
  return (
    <div>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border-b rounded-lg  hover:bg-slate-100 light:bg-slate-800 light:border-gray-700 light:hover:bg-slate-700 border-t-0"
      >
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon
            icon={faBookmark}
            className="text-gray-400 ml-4 fa-2x fa-fw"
            style={{ transform: "scaleX(2) rotate(270deg)" }}
          />
          <h1
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              marginLeft: "10px",
              padding: "0.25rem",
              fontSize: "1rem",
              color: "white",
            }}
          >
            भाग {seq}
          </h1>
        </div>
        <h5
          className="flex-1 mb-2 text-xl font-medium tracking-tight"
          style={{ color: "#1E293B" }}
        >
          {title}
        </h5>
        <p            style={{ color: "#475569" }}
 className="flex-1 font-normal text-black-700 dark:text-black-400">
          {subtitle}
        </p>
        <p style={{ color: "#475569" }} className="flex-1 font-normal text-black-700 dark:text-black-400">
          {time}
        </p>
        <p style={{ color: "#475569" }} className="flex-1 font-normal text-black-700 dark:text-black-400">
          {amount }<span style={{ textDecoration: 'line-through' }}>{originalAmount}</span>
        </p>
        <div style={{  backgroundColor:'#c7e6f8', width: '40px', borderRadius:'4px' }}>
        <p style={{ color: "#475569",  width: '60px', marginLeft:'5px', fontSize:'12px' }} className="flex-1 font-normal text-black-700 dark:text-black-400">
          {language}
        </p>
        </div>
      </a>
      <div className="flex justify-between space-x-2">
          <Link
            href="https://acharyaprashant.org/en/login?page=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3"
            className="flex-1 text-orange-600 text-sm font-medium mx-2 "
            style={{
            marginTop: "-22px",
              marginLeft: "22px",
             width: "10px"
            }}
          >
            Add To Cart       
          </Link>
   
          <Link  style={{
            marginTop: "-22px",
              marginLeft: "-220px",
             width: "10px"
            }}
            href="https://acharyaprashant.org/en/login?page=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3"
            className="flex-1 text-orange-600 text-sm font-medium mx-2 "
          >
            Enroll
          </Link>
        </div>
    </div>
  );
};

export default function Cards() {
  const [courseData, setCourseData] = useState<YourCourseType[]>([]);

  useEffect(() => {
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract courses data
        const courses = data.courses;
        console.log("courses are", courses);
        setCourseData(courses);
      });
  }, []);

  return (
    <div>
      <h1 className="font-medium text-2xl my-4 py-2">Video Series</h1>
      <hr className="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2" />
      <div className="flex flex-wrap ">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
          >
            <Card
              // key={course.id}
              title={course.title}
              subtitle={course.subtitle}
              time={`${Math.floor(course.courseHours)} hours ${Math.round(
                (course.courseHours % 1) * 60
              )} mins`}
              amount={"Contribution: ₹" + course.amount + "    "} // You can format amount as needed
              originalAmount={` ₹${course.originalAmount}`}
              language={course.language.charAt(0).toUpperCase() + course.language.slice(1)}
                            seq={course.series.order.seq}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
