"use client";
import { QuestionCardProps } from "@/lib/interface";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

const QuestionCard = ({
  question,
  variant,
  required,
  data,
}: QuestionCardProps) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const toggleCheckbox = (index: number) => {
    const updatedCheckedItems = checkedItems.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className="p-5 bg-white rounded-md w-full">
      <div className="flex gap-2 mb-2">
        {question}
        {required && <div className="required-field"></div>}
      </div>
      {variant === "short-answer" && (
        <input
          type="text"
          required={required}
          placeholder="Type your name here"
          className="w-full py-2 border-b border-gray-300 mt-2 outline-none placeholder:text-sm text-sm"
        />
      )}
      {variant === "checkbox" &&
        data.map((item: any, index: number) => (
          <div className="flex justify-between items-center " key={index}>
            <div
              className="flex items-center cursor-pointer w-full"
              onClick={() => toggleCheckbox(index)}
            >
              <input
                type="checkbox"
                required={required}
                checked={checkedItems[index]}
                className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground cursor-pointer"
              />
              <span className="ml-2">{item.option}</span>
            </div>

            {checkedItems[index] && (
              <input
                type="number"
                required={required}
                placeholder="Qty:"
                className="w-[50px] border-b border-gray-300 outline-none placeholder:text-sm text-sm"
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default QuestionCard;
