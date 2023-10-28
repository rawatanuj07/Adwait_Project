"use client";
import { useEffect, useState, PropsWithChildren } from "react";

type CardProps = {
  title: string;
  subtitle: string;
  time: string;
  amount: string;
  originalAmount: string;
  language: string;
};
type YourCourseType = {
  id: number;
  title: string;
  subtitle: string;
  courseHours: number;
  amount: number;
  originalAmount: number;
  language: string;
  
  // Add other properties as needed
};
const Card = ({ title, subtitle, time, amount, language, originalAmount }: PropsWithChildren<CardProps>) => {
  return (
    <div >
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-100 light:bg-slate-800 light:border-gray-700 light:hover:bg-slate-700"
    >
       <div className="bg-blue w-6 h-6 rounded-l-lg relative">
      <span className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">भाग</span>
      <div className="absolute top-6 left-0 border-t-6 border-r-6 border-black border-solid"></div>
    </div>
      <h5 className="flex-1  mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">{title}</h5>
      <p className="flex-1 font-normal text-black-700 dark:text-black-400">{subtitle}</p>
      <p className="flex-1 font-normal text-black-700 dark:text-black-400">Time: {time}</p>
      <p className="flex-1 font-normal text-black-700 dark:text-black-400">Amount: {amount}, {originalAmount}</p>
      <p className="flex-1 font-normal text-black-700 dark:text-black-400">Language: {language}</p>
    </a>
    </div>
  );
};

export default function Cards() {
  const [courseData, setCourseData] = useState<YourCourseType[]>([]);

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
      <div className="flex flex-wrap ">
      {courseData.map((course, index) => (
            <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">

        <Card
          // key={course.id}
          title={course.title}
          subtitle={course.subtitle}
          time={course.courseHours + " hours"} // You can format time as needed
          amount={"$ " + course.amount} // You can format amount as needed
          originalAmount={"$ " + course.originalAmount} // You can format amount as needed
          language={course.language}
        />
        </div>
      ))}
      </div>
    </div>)
}
