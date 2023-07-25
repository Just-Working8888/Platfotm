import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/Produckt/ProducktList";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex w-full">
      <div className="registerForm p-10 w-[1400px] flex   mx-auto  m-10 gap-5  text-center justify-center">
        <div className="w-1/2 mr-7">
          <div className="w-full mx-auto">
            <img
              src={user.avatar}
              alt=""
              className="w-[200px] mx-auto h-[200px] rounded-full border  border-violet-300"
            />
          </div>
          <br />
          <div className="border rounded-xl border-solid p-5">
            <h1 className=" text-4xl my-2 font-medium  text-blue-500">
              {" "}
              {user.username}
            </h1>
          </div>
          <br />
          <div className="border rounded-xl border-solid p-5">
            <h2 className="text-3xl my-2 font-medium text-blue-500 ">
              {" "}
              {user.first_name}
            </h2>
          </div>
          <br />
          <div className="border rounded-sm border-solid p-5">
            <h1 className=" text-4xl  text-blue-500"> {user.last_name}</h1>
          </div>
          <br />
          <div className="border rounded-xl border-solid p-5">
            <h2 className="text-3xl text-blue-500 font-normal">{user.email}</h2>
          </div>
          <br />
          <div className="border rounded-xl border-solid p-5">
            {user.date_joined}
            <br />
          </div>
          <br />
          <div className="border rounded-xl border-solid p-5">
            {user.email}
            <br />
          </div>
          <br />
          <div className="border rounded-xl border-solid p-5">{user.phone}</div>
          <br />
          <Link to={"/"}>
            {" "}
            <div className="border rounded-xl border-solid p-5">
              back
              <br />
            </div>
          </Link>
        </div>
        <div>
          <ProductList />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
