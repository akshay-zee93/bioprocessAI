const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`${className} btn hover:shadow-2xl  rounded-sm font-opensans text-sm font-semibold `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
