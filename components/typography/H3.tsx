import clsx from "clsx";
import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  fontWeight?: "bold" | "medium";
}

const H3: React.FC<Props> = ({ fontWeight = "medium", children }) => {
  return (
    <h1
      className={clsx("text-lg text-black", {
        "font-bold": fontWeight === "bold",
        "font-medium": fontWeight === "medium",
      })}
    >
      {children}
    </h1>
  );
};

export default H3;
