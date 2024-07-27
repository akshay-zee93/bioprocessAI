"use client";
import Image from "next/image";
import Link from "next/link";
import UserImg from "../../public/Avatar.jpeg";
import { useState } from "react";

const Cards = ({ data }) => {
  const {
    title = "",
    role = "",
    img = null,
    bio = null,
    linkedin = "",
    youtube = "",
  } = data;
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="card w-72 md:w-96 bg-white shadow-xl">
      <div className="relative w-full h-72 md:h-80">
        <Image
          src={img === null ? UserImg : img}
          alt="member"
          onClick={() => setViewMore((prev) => !prev)}
          className="px-2  cursor-pointer md:px-4 pt-10"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
      </div>

      <div className="card-body text-black items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{role}</p>
        {viewMore && (
          <section className="items-center text-xs text-gray-500 flex gap-2 flex-col">
            {bio}
          </section>
        )}

        <div className="card-actions">
          <nav>
            <div className="grid grid-flow-col gap-4">
              <Link
                href={`https://www.youtube.com/${youtube}`}
                target="_blank"
                className="border-2 border-teal-100 p-2 text-teal-100 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link
                href={`https://www.linkedin.com/${linkedin}`}
                target="_blank"
                className="border-2 border-teal-100 p-2 text-teal-100 rounded-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                    className="fill-current"
                  />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Cards;
