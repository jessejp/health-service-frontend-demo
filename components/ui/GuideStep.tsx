import React, { type PropsWithChildren } from "react";
import Image from "next/image";
import H3 from "../typography/H3";

interface GuideStepProps extends PropsWithChildren {
  iconPath: string;
  alt: string;
  heading: string;
}

const GuideStep: React.FC<GuideStepProps> = ({
  iconPath,
  alt,
  heading,
  children,
}) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="bg-brand-dark-blue rounded p-3">
        <Image
          className="w-full"
          width={24}
          height={25}
          src={iconPath}
          alt={alt}
        />
      </div>
      <div className="flex flex-col gap-3 w-[24.5rem]">
        <H3 fontWeight="medium">{heading}</H3>
        <p className="font-normal text-base">{children}</p>
      </div>
    </div>
  );
};

export default GuideStep;
