import clsx from "clsx";
import { type PropsWithChildren } from "react";

interface H2Props extends PropsWithChildren {
  center?: boolean;
}

const H2: React.FC<H2Props> = ({ center = false, children }) => {
  return (
    <h2 className={clsx("text-5xl leading-none font-medium text-black mb-6", {
        "text-center": center,
    })}>{children}</h2>
  );
};

export default H2;
