import React from "react";

const Header = () => {
  return (
    <section className="bg-white rounded-md  w-full relative overflow-hidden ">
      <div className="w-full bg-red-500 p-1"></div>
      <div className="p-5">
        <h1 className="text-3xl font-bold">Office Supplies Requisition Form</h1>
        <hr className="my-3"/>
        <p className="text-sm text-gray-500">Please fill out the form below to request office supplies. We will get back to you as soon as possible.</p>
      </div>
    </section>
  );
};

export default Header;
