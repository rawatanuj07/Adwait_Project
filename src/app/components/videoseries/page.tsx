"use client";
import { useEffect, useState, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
type CardProps = {
  thumbnail: {};
  title: string;
  subtitle: string;
  coursesCount: number;
};
type YourCourseType = {
  seq: number;
  id: number;
  title: string;
  subtitle: string;
  coursesCount: number;

  thumbnail: string;
};
const Card = ({
  thumbnail,
  title,
  subtitle,
  coursesCount,
}: PropsWithChildren<CardProps>) => {
  return (
    <div>
      <a
        href="#"
        className="block max-w-l p-6 bg-white border-b rounded-lg  hover:bg-slate-100 light:bg-slate-800 light:border-gray-700 light:hover:bg-slate-700 border-t-0"
      >
        <Image
          src={ thumbnail }
          alt={thumbnail}
          width={200}
          height={200}
          style={{ borderRadius: "4px" }}
        />

        <h1>{title}</h1>
        <h1>{subtitle}</h1>
        <h1>{coursesCount} Video Series</h1>
      </a>
    </div>
  );
};
export default function VideoSeries() {
  const [relatedData, setRelatedData] = useState<YourCourseType[]>([]);
  console.log("relatedData is", relatedData);
  useEffect(() => {
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract courses data
        const courses = data.relatedContent;
        console.log("crelatedContent are", courses);
        setRelatedData(courses);
      });
  }, []);

  return (
    <div>
      <h1 className="font-medium text-2xl my-4 py-2 mx-5 ">
        Other Helpful Video Series
      </h1>
      <hr className="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2" />
      <div className="flex flex-wrap ">
        {relatedData.map((coursess: any) => (
          <div
            key={coursess.id}
            className="w-half sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
          >
            <Card
              key={coursess.id}
              title={coursess.title}
              subtitle={coursess.subtitle}
              thumbnail={coursess.thumbnail.domain + "/" +coursess.thumbnail.basePath + "/10/"  + coursess.thumbnail.key}
              coursesCount={coursess.coursesCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
