import React from "react";
import Header from "./header";
import QuestionCard from "./questionCard";
import { stationaryData } from "@/data/stationaryData";

const Forms = () => {
  return (
    <main className=" w-full h-screen flex justify-center transition-all py-10 bg-red-300">
      <form className="flex max-w-[400px] lg:max-w-[700px] md:max-w-[550px] h-full w-full flex-col gap-5  items-center ">
        <Header />
        <QuestionCard
          question="Requested By:"
          variant="short-answer"
          required={true}
          data={stationaryData}
        />
        <QuestionCard
          question="Stationary:"
          variant="checkbox"
          required={false}
          data={stationaryData}
        />
      </form>
    </main>
  );
};

export default Forms;
