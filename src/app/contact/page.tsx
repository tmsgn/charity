import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "ያግኙን — Contact",
  description:
    "ኄር የበጎ አድራጎት ማህበርን ያግኙን — Get in touch with Kher Charity Association.",
};

export default function ContactPage() {
  return <ContactView />;
}
