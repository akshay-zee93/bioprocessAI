const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`${className} btn hover:shadow-2xl box-border h-8 min-h-8 lg:h-12 lg:min-h-12 text-xs px-2  rounded-sm  lg:text-sm font-semibold `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
