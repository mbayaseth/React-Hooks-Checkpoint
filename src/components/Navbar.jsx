import React from "react";

export const Navbar = () => {
  return (
    <nav className="shadow-md  p-2   bg-slate-500">
      <div className="max-w-4xl  flex mx-auto items-center gap-4">
        <img
          src="https://img.freepik.com/free-vector/cinema-concept_1284-12759.jpg?size=626&ext=jpg&ga=GA1.1.1182101259.1700486638&semt=ais"
          alt=""
          className="w-14"
        />
        <h2 className="text-blue-500 tracking-wide">MOVIE APP</h2>
      </div>
    </nav>
  );
};
