"use client";
import { useEffect, useState, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
type CardProps = {
  thumbnail: string; // Change type from {} to string
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
        className="flex max-w-m p-6 bg-white border-b rounded-lg  hover:bg-slate-100 light:bg-slate-800 light:border-gray-700 light:hover:bg-slate-700 border-t-0"
        style={{ position: "relative", width: "700px", height: "180px" }}
      >
        <div style={{ position: "relative", width: "400px", height: "300" }}>
          <Image
            src={thumbnail as string} // Fix the error by casting thumbnail as string
            alt={title} // Use title instead of thumbnail for alt text
            width={200}
            height={120}
            style={{
              position: "absolute",
              borderRadius: "4px",
              marginRight: "5px",
              marginLeft: "22px",
              marginTop: "-5px",
            }}
          />
          <Image
            src={thumbnail as string} // Fix the error by casting thumbnail as string
            alt={title} // Use title instead of thumbnail for alt text
            width={208}
            height={116}
            style={{
              position: "absolute",
              borderRadius: "4px",
              marginLeft: "18px",
              border: "1px solid white",
              marginTop: "-3px",

            }}
          />

          <Image
            src={thumbnail as string} // Fix the error by casting thumbnail as string
            alt={title} // Use title instead of thumbnail for alt text
            width={216}
            height={112}
            style={{
              position: "absolute",
              borderRadius: "4px",
              marginLeft: "16px",
              marginTop: "0px",
              border: "1px solid white",

            }}
          />
          <Image
          src="/assets/sign.png"
          alt="signature"
            width={50}
            height={25}
            style={{
              position: "absolute",
              borderRadius: "4px",
              marginLeft: "175px",
              marginTop: "90px",

            }}
            />
        </div>
        <div className="block" style={{ width: "500px", marginLeft: "20px" }}>
          <h1 className="font-medium">{title}</h1>
          <h1 className="font-light">{subtitle}</h1>
          <h1 className="font-light">{coursesCount} Video Series</h1>
        </div>
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
            className="flex w-half sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
          >
            <Card
              key={coursess.id}
              title={coursess.title}
              subtitle={coursess.subtitle}
              thumbnail={
                coursess.thumbnail.domain +
                "/" +
                coursess.thumbnail.basePath +
                "/10/" +
                coursess.thumbnail.key
              }
              coursesCount={coursess.coursesCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
