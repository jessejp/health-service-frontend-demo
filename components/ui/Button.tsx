import clsx from "clsx";
import Image from "next/image";

type Props = {
  variant?: "primary" | "outline";
  iconPath?: string;
};

const Button: React.FC<Props> = ({ variant = "primary", iconPath }) => {
  return (
    <button
      className={clsx(
        "text-lg font-semibold rounded-md h-12 w-fit pl-5 pr-6 ",
        {
          "text-white bg-brand-primary-blue hover:bg-brand-primary-blue-light":
            variant === "primary",
          "text-brand-primary-blue bg-white border-[1px] border-brand-primary-blue":
            variant === "outline",
        }
      )}
    >
      <div className="flex gap-3">
        {!!iconPath && (
          <Image src={iconPath} width={24} height={24} alt="Calendar Icon" />
        )}
        <span>Book Now</span>
      </div>
    </button>
  );
};

export default Button;
