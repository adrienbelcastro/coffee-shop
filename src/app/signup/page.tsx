import Form from "@/components/Signup-Form";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-rose-50 h-screen">
      <div className="h-[550px] w-[500px] shadow-lg rounded-xl shadow-[#00000040] bg-white">
        <Form />
      </div>
    </div>
  );
};

export default page;
