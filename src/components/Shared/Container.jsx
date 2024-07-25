const Container = ({ children, className }) => {
  return (
    <div
      className={`xl:px-[60px] lg:px-[30px] px-4 w-full max-w-[1536px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
