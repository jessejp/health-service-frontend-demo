import { type PropsWithChildren } from "react";

const H1: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-5xl leading-none font-bold text-black">{children}</h1>
  );
};

export default H1;
