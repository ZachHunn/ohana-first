import { AgencyContent } from "@/components/agency-content";
import { CONFIG } from "@/config/config";
import { EUri } from "@/const/enums";

export default async function Page({
  params,
}: {
  params: { contentId: string; agencyId: string };
}) {
  const getAgencyPage = async (agencyID: number, contentID: number) => {
    const res = await fetch(
      `${CONFIG.ADMIN_URL}${EUri.CONTENT_PAGES}?filter[agency][_eq]=${agencyID}&filter[id][_eq]=${contentID}`,
      { cache: "no-store" },
    );
    const content = await res.json();
    const [data] = content.data;
    return data;
  };

  const page = await getAgencyPage(
    parseInt(params.agencyId),
    parseInt(params.contentId),
  );

  return <AgencyContent content={page} />;
}
