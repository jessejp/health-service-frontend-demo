import clsx from "clsx";
import Image from "next/image";

type Props = {
  variant?: "primary" | "outline";
  iconPath?: string;
};

const Button: React.FC<Props> = ({ variant = "primary", iconPath }) => {
  return (
    <button
      className={clsx("text-lg font-semibold rounded-md h-12 w-fit", {
        "text-white bg-brand-primary-blue hover:bg-brand-primary-blue-light":
          variant === "primary",
        "text-brand-primary-blue bg-white border-[1px] border-brand-primary-blue hover:bg-brand-light-gray":
          variant === "outline",
        "pl-5 pr-6": !!iconPath,
        "px-6": !iconPath,
      })}
    >
      <div className="flex gap-3 whitespace-nowrap">
        {!!iconPath && (
          <Image src={iconPath} width={24} height={24} alt="Calendar Icon" />
        )}
        Book Now
      </div>
    </button>
  );
};

export default Button;
