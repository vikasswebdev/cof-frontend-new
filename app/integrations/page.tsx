import { Metadata } from "next";
import Integrations from "./Integrations";

export const metadata: Metadata = {
  title: "Integrations",
};

export default async function Integration() {
  return (
    <section className="body-font">
      <h1 className="text-5xl md:pl-10 pl-5 pt-10 md:text-7xl font-bold">
        Integrations
      </h1>
      <Integrations />
    </section>
  );
}
