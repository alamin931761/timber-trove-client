const Container = ({ children, className }) => {
  return (
    <div className={`px-[60px] border-2 border-red-orange ${className}`}>
      {children}
    </div>
  );
};

export default Container;
