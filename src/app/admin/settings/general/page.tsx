import FormGeneral from "./_components/FormGeneral";

import { getGenerals } from "./_actions/general";

export default async function General() {
  const generals = await getGenerals("general");

  return (
    <div className="p-4 w-full">
      <h1>Generals</h1>
      <FormGeneral settings={generals} />
    </div>
  );
}
