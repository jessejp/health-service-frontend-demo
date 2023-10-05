"use client";

import { useState, type PropsWithChildren } from "react";
import Image from "next/image";

interface AccordionProps extends PropsWithChildren {
  heading: string;
  storybookHack?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 w-[28rem] py-2 px-3">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex justify-between"
      >
        <span className="w-[26.0625rem] text-start">{heading}</span>
        <span>
          {isOpen ? (
            <Image
              src={`/icon/chevron-up.svg`}
              alt="fold icon"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={`/icon/chevron-down.svg`}
              alt="unfold icon"
              width={24}
              height={24}
            />
          )}
        </span>
      </button>
      {isOpen && <p className="w-full">{children}</p>}
    </div>
  );
};

export default Accordion;
