"use client";

import { poppins } from "@/app/fonts";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={`flex ${poppins.className}`} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        className={`input input-bordered rounded-r-none rounded-l-[5px] w-full max-w-full focus:outline-none font-normal`}
      />
      <input
        className={`btn btn-neutral bg-black rounded-r-[5px] rounded-l-none w-[90px] font-medium`}
        type="submit"
        value="SUBMIT"
      />
    </form>
  );
};

export default Form;
