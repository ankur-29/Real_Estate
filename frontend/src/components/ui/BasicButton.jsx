import { BiLoaderAlt } from "react-icons/bi";

const BasicButton = ({
  variant = "contained",
  radius = "large",
  type,
  className,
  disabled,
  loading,
  children,
  onClick,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled || loading}
      className={
        `min-h-[40px] font-semibold py-2 px-4 transition-all duration-200 flex items-center justify-center hover:bg-secondary outline-1 focus:bg-secondary outline-none disabled:opacity-70 disabled:bg-secondary
          ${
            variant === "contained"
              ? `bg-primary text-white border border-primary`
              : `border-2 border-primary bg-transparent hover:border-secondary disabled:text-primary disabled:bg-transparent disabled:hover:border-primary text-primary hover:text-primary focus:text-white`
          } 
          ${radius === "small" ? "rounded-lg " : "rounded-2xl "} ` + className
      }
    >
      {loading ? <BiLoaderAlt className="w-6 h-6 animate-spin" /> : children}
    </button>
  );
};

export default BasicButton;