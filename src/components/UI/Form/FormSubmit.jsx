const FormSubmit = ({ className }) => {
  return (
    <div>
      <button
        className={`btn btn-neutral bg-black hover:bg-white hover:text-black rounded-r-[6px] rounded-l-none font-medium transition ease-linear duration-500 ${className}`}
        type="submit"
      >
        submit
      </button>
    </div>
  );
};

export default FormSubmit;
