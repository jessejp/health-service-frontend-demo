import clsx from "clsx";
import Image from "next/image";
import { type PropsWithChildren } from "react";
import H3 from "../typography/H3";
import Button from "./Button";

interface CardProps extends PropsWithChildren {
  iconPath: string;
  alt: string;
  heading: string;
  variant: "text" | "withButton";
}

const Card: React.FC<CardProps> = ({
  iconPath,
  alt,
  heading,
  variant,
  children,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 min-h-[11rem] p-4 bg-brand-light-gray rounded shadow-brand",
        {
          "w-80": variant === "withButton",
          "w-60": variant === "text",
        }
      )}
    >
      <div className="flex gap-2 items-center">
        <div
          className={clsx("bg-brand-light-blue rounded-full", {
            "p-3": variant === "withButton",
            "p-1": variant === "text",
          })}
        >
          <Image className="w-full" width={24} height={25} src={iconPath} alt={alt} />
        </div>
        <div className="w-44">
        <H3 fontWeight="bold">{heading}</H3>
        </div>
      </div>
      <p
        className={clsx("font-normal", {
          "text-base px-2": variant === "withButton",
          "text-sm": variant === "text",
        })}
      >
        {children}
      </p>
      {variant === "withButton" && <Button />}
    </div>
  );
};

export default Card;
