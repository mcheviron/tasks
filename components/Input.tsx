import clsx from "clsx";

type InputProps = {
  className?: string;
  [key: string]: any;
};

const Input = ({ className, ...props }: InputProps) => (
  <input
    className={clsx(
      "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
      className
    )}
    {...props}
  />
);

export default Input;
