import clsx from "clsx";
import { type PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  direction?: "row" | "column";
  gap?: "default" | "small" | "medium";
  align?: "start" | "center";
}

const Container: React.FC<ContainerProps> = ({
  direction = "row",
  gap = "default",
  align = "start",
  children,
}) => {
  return (
    <div
      className={clsx(
        "flex max-md:flex-wrap",
        {
          "flex-col": direction === "column",
          "flex-row": direction === "row",
        },
        {
          "gap-8": gap === "medium",
          "gap-6": gap === "default",
          "gap-4": gap === "small",
        },
        {
          "justify-start": align === "start",
          "justify-center": align === "center",
        }
      )}
    >
      {children}
    </div>
  );
};

export default Container;