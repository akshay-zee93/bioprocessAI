const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`${className} btn hover:shadow-2xl box-border h-8 min-h-8 md:h-12 md:min-h-12 text-xs px-2  rounded-sm font-opensans md:text-sm font-semibold `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
