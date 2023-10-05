import clsx from "clsx";
import { type PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  direction?: "row" | "column";
  gap?: "default" | "small";
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
        "flex",
        {
          "flex-col": direction === "column",
          "flex-row": direction === "row",
        },
        {
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