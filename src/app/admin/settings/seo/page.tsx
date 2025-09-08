import { getSeo } from "./_actions/seo";
import FormSEO from "./_components/FormSEO";

export default async function General() {
  const generals = await getSeo("seo");

  return (
    <div className="p-4 w-full">
      <h1>SEO (Search Engine Optimization)</h1>
      <FormSEO settings={generals} />
    </div>
  );
}
