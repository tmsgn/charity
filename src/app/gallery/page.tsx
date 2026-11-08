import type { Metadata } from "next";
import GalleryView from "@/components/views/GalleryView";

export const metadata: Metadata = {
  title: "ፎቶዎች — Gallery",
  description:
    "የኄር የበጎ አድራጎት ማህበር የእንቅስቃሴ ምስሎች — Photos from the activities of Kher Charity Association.",
};

export default function GalleryPage() {
  return <GalleryView />;
}
