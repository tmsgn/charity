import type { Metadata } from "next";
import GetInvolvedView from "@/components/views/GetInvolvedView";

export const metadata: Metadata = {
  title: "ይሳተፉ — Get Involved",
  description:
    "አስተዋጾ ይሁኑ፣ ድጋፍ ያድርጉ፣ አጋር ይሁኑ — Volunteer, donate, or partner with Kher Charity Association.",
};

export default function GetInvolvedPage() {
  return <GetInvolvedView />;
}
