import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "ስለ እኛ — About Us",
  description:
    "ኄር የበጎ አድራጎት ማህበር ታሪክ፣ ተልዕኮ፣ ራእይና እሴቶች — The story, mission, vision and values of Kher Charity Association.",
};

export default function AboutPage() {
  return <AboutView />;
}
