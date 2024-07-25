import { poppins, RobotoSerif } from "@/app/fonts";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const FeedbackCard = ({ data }) => {
  const { name, feedback, bgWhite } = data;

  return (
    // Conditional styling based on bgWhite value
    <div
      className={`${
        bgWhite ? "shadow-lg bg-white" : "bg-aqua-squeeze"
      } p-5 h-[314px] rounded-[3px]`}
    >
      {/* Quote icon at the top of the card */}
      <BiSolidQuoteAltLeft className="text-xl" />

      {/* Display the name with custom font and styling */}
      <h5 className={`${RobotoSerif.className} font-semibold text-xl my-9`}>
        {name}
      </h5>

      {/* Display the feedback text with conditional text color */}
      <p
        className={`${poppins.className} font-medium ${
          bgWhite ? "text-smokey-grey" : "text-black"
        }`}
      >
        {feedback}
      </p>
    </div>
  );
};

export default FeedbackCard;
