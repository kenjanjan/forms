import React from "react";
import Header from "./header";
import QuestionCard from "./questionCard";

const Forms = () => {
  return (
    <main className=" w-full h-screen flex justify-center transition-all py-10 bg-red-300">
      <form className="flex max-w-[400px] lg:max-w-[700px] h-full w-full flex-col gap-5  items-center ">
        <Header/>
        <QuestionCard question="Requested By:" variant="checkbox" required={true}/>
      </form>
    </main>
  );
};

export default Forms;
