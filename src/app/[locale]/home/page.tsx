import { Metadata } from "next";
import QuickAccess from "./_components/QuickAccess";

import ExecutivesNews from "./_components/ExecutivesNews";
import EventsCalendar from "./_components/EventsCalendar";
import RelatedLinks from "./_components/RelatedLinks";
import PublicRelations from "./_components/PublicRelations";
import Gallery from "./_components/Gallery";

export const metadata: Metadata = {
  title: "Home | YNP Company",
  description: "Description",
};

export default async function Home() {
  return (
    <div>
      <QuickAccess />

      <ExecutivesNews />

      <PublicRelations />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-3 px-4 sm:px-0 sm:gap-8">
          <EventsCalendar />
          <div className="col-span-2">
            <Gallery />
          </div>
        </div>
      </div>

      <RelatedLinks />
    </div>
  );
}
