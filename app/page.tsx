import Button from "@/components/ui/Button";
import H1 from "@/components/typography/H1";
import Image from "next/image";
import InfoCard from "@/components/ui/InfoCard";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <nav className="w-screen bg-brand-light-gray h-24 flex items-center px-8 justify-between">
        <div className="w-full max-w-[18rem]">
          <Image
            className="w-full"
            src="/VetExpress.png"
            alt="VetExpress+"
            width={297}
            height={45}
          />
        </div>
        <div className="flex gap-6 whitespace-nowrap">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Book Appointment</a>
          <a href="#">Out Values</a>
        </div>
        <div className="flex justify-end w-72">
          <Button variant="outline" />
        </div>
      </nav>
      <main className="w-screen flex justify-center items-center">
        <div className="max-w-[1140px] flex flex-col">
          <div className="w-fit h-fit relative">
            <div className="absolute top-4 left-4 ">
              <Container align="start" gap="small" direction="row">
                <InfoCard
                  iconPath="/icon/phone-black.svg"
                  alt="phone icon"
                  variant="dark"
                  heading="Emergency Call"
                  body="+123 456 7890"
                />
                <InfoCard
                  iconPath="/icon/time-black.svg"
                  alt="clock icon"
                  variant="light"
                  heading="Working Hours"
                  body="8 a.m. - 6 p.m."
                />
              </Container>
            </div>
            <Image
              src="/hero.jpg"
              alt="VetExpress+ offices"
              width={1140}
              height={528}
            />
          </div>
          <div className="flex">
            <div className="w-[40.0625rem]">
              <H1>Welcome to VetExpress+</H1>
              <p>
                Discover the exceptional care your animals deserve, complete
                with hassle-free transportation to and from our dedicated
                specialists. Choose from a range of specialized services offered
                by our dedicated team.
              </p>
            </div>
            <Card
              iconPath="icon/checkmark-brand-blue.svg"
              alt="calendar icon"
              heading="Book an appointment"
              variant="withButton"
            >
              Select a date and time that suits your schedule.
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
