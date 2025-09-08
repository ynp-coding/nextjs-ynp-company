import { Metadata } from "next";
import QuickAccess from "./_components/QuickAccess";

import ExecutivesNewsSection from "./_components/ExecutivesNewsSection";
import EventsCalendar from "./_components/EventsCalendar";
import RelatedLinksSection from "./_components/RelatedLinksSection";
import PublicRelationsSection from "./_components/PublicRelationsSection";
import Gallery from "./_components/Gallery";

export const metadata: Metadata = {
  title: "Home | YNP Company",
  description: "Description",
};

export default async function Home() {
  return (
    <div>
      <QuickAccess />

      <ExecutivesNewsSection />

      <PublicRelationsSection />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <EventsCalendar />
          <div className="col-span-2">
            <Gallery />
          </div>
        </div>
      </div>

      <RelatedLinksSection />
    </div>
  );
}
