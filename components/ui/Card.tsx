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
        "flex flex-col min-h-[11rem] p-4 bg-brand-light-gray rounded shadow-brand",
        {
          "w-80 gap-4": variant === "withButton",
          "w-60 gap-3": variant === "text",
        }
      )}
    >
      <div
        className={clsx("flex items-center", {
          "gap-2": variant === "withButton",
          "gap-3": variant === "text",
        })}
      >
        <div
          className={clsx("bg-brand-light-blue rounded-full", {
            "p-3": variant === "withButton",
            "p-1": variant === "text",
          })}
        >
          <Image
            className="w-8 aspect-square"
            width={24}
            height={25}
            src={iconPath}
            alt={alt}
          />
        </div>
        <div className="w-[14.5rem]">
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
