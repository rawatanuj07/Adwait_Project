"use client";
import { useEffect, useState } from "react";
const Card = ({ title, subtitle, time, amount, language }) => {
  return (
    <a
      href="#"
      className="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="flex-1  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="flex-1 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
      <p className="flex-1 font-normal text-gray-700 dark:text-gray-400">Time: {time}</p>
      <p className="flex-1 font-normal text-gray-700 dark:text-gray-400">Amount: {amount}</p>
      <p className="flex-1 font-normal text-gray-700 dark:text-gray-400">Language: {language}</p>
    </a>
  );
};

export default function Cards() {
  const [courseData, setCourseData] = useState([]);

    useEffect(() => {
      fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3")
      .then((response) => response.json())
      .then((data) => {
        // Extract courses data
        const courses = data.courses;
        console.log("courses are", courses);
        setCourseData(courses);
      });
  }, []);

    return(
      <div>
      <h1 className="font-normal text-2xl my-4 py-2">Video Series</h1>
      <hr className="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2" />
      <div className="flex flex-wrap">
      {courseData.map((course) => (
        <Card
          key={course.id}
          title={course.title}
          subtitle={course.subtitle}
          time={course.courseHours + " hours"} // You can format time as needed
          amount={"$ " + course.amount} // You can format amount as needed
          language={course.language}
        />
      ))}
      </div>
    </div>)
}
