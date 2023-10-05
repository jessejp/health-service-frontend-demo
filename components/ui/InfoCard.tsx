import clsx from "clsx";
import Image from "next/image";

type Props = {
  variant?: "light" | "dark";
  iconPath: string;
  alt: string;
  heading: string;
  body: string;
};

const InfoCard: React.FC<Props> = ({
  iconPath,
  alt,
  variant = "light",
  heading,
  body,
}) => {
  return (
    <div
      className={clsx(
        "w-80 flex gap-2 py-3 px-4 rounded items-center",
        {
          "bg-brand-dark-gray text-white": variant === "dark",
          "bg-brand-light-gray text-black": variant === "light",
        }
      )}
    >
      <div
        className={clsx(
          "grid content-center justify-center w-10 h-10 rounded-full",
          {
            "bg-white": variant === "dark",
            "bg-brand-light-blue": variant === "light",
          }
        )}
      >
        <Image src={iconPath} width={24} height={24} alt={alt} />
      </div>
      <div className="flex flex-col px-2 justify-start">
        <span className="text-xl font-bold">{heading}</span>
        <span className="text-lg">{body}</span>
      </div>
    </div>
  );
};

export default InfoCard;
