const Input = ({ className }) => {
  return (
    <input
      type="email"
      placeholder="Enter your email"
      className={`input input-bordered rounded-r-none rounded-l-[6px] focus:outline-none font-normal border-black placeholder:text-black ${className}`}
    />
  );
};

export default Input;
