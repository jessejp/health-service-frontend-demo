import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const H1: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="text-5xl leading-none font-bold text-black">{children}</h1>
  );
};

export default H1;
