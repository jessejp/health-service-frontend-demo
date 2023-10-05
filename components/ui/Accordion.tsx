"use client";

import { useState, type PropsWithChildren } from "react";
import Image from "next/image";
import clsx from "clsx";

interface AccordionProps extends PropsWithChildren {
  heading: string;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  heading,
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-3 w-[28rem] py-2 px-3">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex justify-between"
      >
        <div className="w-[26.0625rem] text-start font-medium cursor-pointer">
          {heading}
        </div>
        <div>
          {isOpen ? (
            <Image
              src="/icon/chevron-up.svg"
              alt="fold icon"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/icon/chevron-down.svg"
              alt="unfold icon"
              width={24}
              height={24}
            />
          )}
        </div>
      </button>
      <p
        className={clsx("w-full transition-all duration-300 overflow-auto", {
          "opacity-0 max-h-0": !isOpen,
          "opacity-100 max-h-96": isOpen,
        })}
      >
        {children}
      </p>
    </div>
  );
};

export default Accordion;
