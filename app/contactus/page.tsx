"use client";
import { Metadata } from "next";
import ContactForm from "./ContactForm";
import { useSearchParams } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Contact us",
// };

const Contactus: React.FC = () => {
  // const searchParams = useSearchParams();
  // console.log("searchParams", searchParams.get("int"));

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Let&apos;s connect
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Have an Idea, Let&apos;s discuss
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contactus;
