import type { Metadata } from "next";
import WorkView from "@/components/views/WorkView";

export const metadata: Metadata = {
  title: "ሥራችን — Our Work",
  description:
    "የኄር የበጎ አድራጎት ማህበር የሥራ መስኮችና ፕሮጀክቶች — Areas of work and projects of Kher Charity Association.",
};

export default function OurWorkPage() {
  return <WorkView />;
}
