import FeedbackCard from "../FeedbackCard";
import SectionTitle from "./SectionTitle";

const FeedbackCorner = () => {
  const feedbacks = [
    {
      _id: 1,
      name: "Emily Wilson",
      feedback:
        "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
      bgWhite: true,
    },
    {
      _id: 2,
      name: "Sarah Thompson",
      feedback:
        "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!",
      bgWhite: false,
    },
    {
      _id: 3,
      name: "Olivia Martinez",
      feedback:
        "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
      bgWhite: true,
    },
  ];

  return (
    <div>
      {/* Section title for the feedback corner */}
      <SectionTitle title="Feedback Corner" />

      {/* Grid layout to display feedback cards */}
      <div className="grid grid-cols-3 gap-9">
        {feedbacks.map((data) => (
          <FeedbackCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackCorner;
