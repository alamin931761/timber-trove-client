"use client";

import { poppins } from "@/app/fonts";

const Form = ({ children }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={`flex ${poppins.className}`} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
