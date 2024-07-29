import { QuestionCardProps } from "@/lib/interface";

const QuestionCard = ({ question, variant , required}: QuestionCardProps) => {
  return (
    <div className="p-5 bg-white rounded-md w-full">
      <div className="flex gap-2">{question}{required &&(
        <div className="required-field"></div>
      )}</div>
      {variant === "short-answer" && (
        <input
          type="text"
          required={required}
          placeholder="Type your name here"
          className="w-full py-2 border-b border-gray-300 mt-2 outline-none placeholder:text-sm text-sm"
        />
      )}
      {variant === "checkbox" && (
        <input type="checkbox"/>
      )}
    </div>
  );
};

export default QuestionCard;
