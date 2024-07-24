const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`${className} btn hover:shadow-2xl box-border  text-xs px-2  rounded-sm  lg:text-sm font-semibold `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
