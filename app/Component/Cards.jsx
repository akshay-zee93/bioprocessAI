"use client";
import Link from "next/link";

const Cards = ({ data }) => {
  const {
    title = "",
    role = "",
    facebook = "",
    instagram = "",
    youtube = "",
  } = data;
  return (
    <div className="card w-80 md:w-96 bg-white shadow-xl">
      <figure className="px-5 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="member"
        />
      </figure>
      <div className="card-body text-black items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{role}</p>
        <div className="card-actions">
          <nav>
            <div className="grid grid-flow-col gap-4">
              <Link
                href={instagram}
                className=" border-2 border-teal-100 p-2 text-teal-100 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path d="M7.75 2H16.25C20.35 2 23 4.65 23 8.75V15.25C23 19.35 20.35 22 16.25 22H7.75C3.65 22 1 19.35 1 15.25V8.75C1 4.65 3.65 2 7.75 2ZM7.5 4C5.01 4 3 6.01 3 8.5V15.5C3 17.99 5.01 20 7.5 20H16.5C18.99 20 21 17.99 21 15.5V8.5C21 6.01 18.99 4 16.5 4H7.5ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9ZM18.5 6.5C18.78 6.5 19 6.72 19 7C19 7.28 18.78 7.5 18.5 7.5H18.48C18.2 7.5 18 7.28 18 7C18 6.72 18.2 6.5 18.48 6.5H18.5Z" />
                </svg>
              </Link>
              <Link
                href={youtube}
                className=" border-2 border-teal-100 p-2 text-teal-100 rounded-full"
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
                href={facebook}
                className=" border-2 border-teal-100 p-2 text-teal-100 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
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
