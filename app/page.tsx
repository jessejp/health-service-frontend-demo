"use client";

import Button from "@/components/ui/Button";
import H1 from "@/components/typography/H1";
import Image from "next/image";
import InfoCard from "@/components/ui/InfoCard";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import H2 from "@/components/typography/H2";
import GuideStep from "@/components/ui/GuideStep";
import SectionSpacing from "@/components/ui/SectionSpacing";
import Accordion from "@/components/ui/Accordion";

export default function Home() {
  return (
    <>
      <nav className="w-screen bg-brand-light-gray h-24 flex items-center px-8 justify-between">
        <div className="w-full max-w-[18rem]">
          <Image
            src="/VetExpress_logo.svg"
            alt="VetExpress+ logo"
            width={226}
            height={43}
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
      <main className="w-screen flex justify-center items-center mt-12">
        <div className="max-w-[1140px] flex flex-col">
          <div className="w-fit h-fit relative">
            <div className="absolute bottom-4 right-6">
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
          <div className="flex w-full justify-between pt-8">
            <div className="w-[40.0625rem]">
              <H1>Welcome to VetExpress+</H1>
              <p className="mt-4">
                Discover the exceptional care your animals deserve, complete
                with hassle-free transportation to and from our dedicated
                specialists. Choose from a range of specialized services offered
                by our dedicated team.
              </p>
            </div>
            <div className="mr-6">
              <Card
                iconPath="icon/calendar-brand-blue.svg"
                iconSize={{ w: 24, h: 25 }}
                alt="calendar icon"
                heading="Book an appointment"
                variant="withButton"
              >
                Select a date and time that suits your schedule.
              </Card>
            </div>
          </div>

          <SectionSpacing />

          <H2>Booking Made Simple</H2>
          <div className="flex items-start justify-between">
            <Image
              src="/booking_dog.jpg"
              alt="happy dog image"
              width={449}
              height={408}
            />
            <Container align="start" direction="column">
              <GuideStep
                iconPath="icon/message-white.svg"
                alt="message icon"
                heading="1. Describe Your Need"
              >
                Tell us about your animal&apos;s requirements. It&apos;s as
                simple as sharing your needs and preferences. Your valuable
                input helps us tailor the perfect care plan.
              </GuideStep>
              <GuideStep
                iconPath="icon/calendar-white.svg"
                alt="calendar icon"
                heading="2. Choose a Convenient Time"
              >
                Select a date and time that suits your schedule. We offer
                flexible options to ensure booking is a breeze and fits
                seamlessly into your day.
              </GuideStep>
              <GuideStep
                iconPath="icon/checkmark-white.svg"
                alt="calendar icon"
                heading="3. Confirm Your Booking"
              >
                Once you&apos;ve described your need and selected a time,
                it&apos;s time to confirm your booking. With just a click,
                you&apos;re all set to receive premium care for your animals.
              </GuideStep>
              <Button iconPath="icon/calendar-white.svg" />
            </Container>
          </div>

          <SectionSpacing />

          <H2 center={true}>Our Core Values</H2>
          <Container align="center">
            <Card
              iconPath="icon/checkmark-brand-blue.svg"
              iconSize={{ w: 24, h: 25 }}
              alt="checkmark icon"
              heading="Compassionate Care"
              variant="text"
            >
              Our dedicated team is committed to providing compassionate care,
              ensuring that your animals receive the love and attention they
              need.
            </Card>
            <Card
              iconPath="icon/checkmark-brand-blue.svg"
              iconSize={{ w: 24, h: 25 }}
              alt="checkmark icon"
              heading="Excellence in Expertise"
              variant="text"
            >
              Our team is comprised of highly qualified individuals who are
              dedicated to staying at the forefront of their fields.
            </Card>
            <Card
              iconPath="icon/checkmark-brand-blue.svg"
              iconSize={{ w: 24, h: 25 }}
              alt="checkmark icon"
              heading="Convenience Redefined"
              variant="text"
            >
              We understand that managing your animals&apos; care can be a
              challenge, and that&apos;s why we go the extra mile.
            </Card>
            <Card
              iconPath="icon/checkmark-brand-blue.svg"
              iconSize={{ w: 24, h: 25 }}
              alt="checkmark icon"
              heading="Trustworthy Partner"
              variant="text"
            >
              We&apos;re transparent and trustworthy.
            </Card>
          </Container>

          <SectionSpacing />

          <H2>Our Comprehensive Services</H2>
          <div className="flex justify-between items-start">
            <Container align="start" direction="column">
              <Accordion heading="Preventative Care">
                Our team is dedicated to keeping your animals healthy through
                regular check-ups and vaccinations. We believe that prevention
                is the key to a happy, healthy life for your animals
              </Accordion>
              <Accordion heading="Specialized Treatments">
                Our team is dedicated to keeping your animals healthy through
                regular check-ups and vaccinations. We believe that prevention
                is the key to a happy, healthy life for your animals
              </Accordion>
              <Accordion heading="24/7 Emergency Support">
                Our team is dedicated to keeping your animals healthy through
                regular check-ups and vaccinations. We believe that prevention
                is the key to a happy, healthy life for your animals
              </Accordion>
              <Accordion heading="Transportation Services">
                Our team is dedicated to keeping your animals healthy through
                regular check-ups and vaccinations. We believe that prevention
                is the key to a happy, healthy life for your animals
              </Accordion>
            </Container>
            <Image
              src="/services_horse.jpg"
              alt="horse veterinarian image"
              width={565}
              height={408}
            />
          </div>

          <SectionSpacing />
        </div>
      </main>
      <footer className="w-full h-96 bg-brand-light-gray"></footer>
    </>
  );
}
