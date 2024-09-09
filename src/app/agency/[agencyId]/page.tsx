import { AgencyLandingPage } from "@/components/agency-landing-page";
import { CONFIG } from "@/config/config";
import { EUri } from "@/const/enums";
import React from "react";

export default async function Page({
  params,
}: {
  params: { agencyId: string };
}) {
  const getAgencyContent = async () => {
    const data = await fetch(
      `${CONFIG.ADMIN_URL}${EUri.CONTENT_PAGES}?filter[agency][_eq]=${params.agencyId}`,
      { cache: "no-store" },
    );
    const content = await data.json();
    return content?.data;
  };

  const getAgency = async () => {
    const resp = await fetch(
      `${CONFIG.ADMIN_URL}${EUri.AGENCIES}?filter[id][_eq]=${params.agencyId}`,
      { cache: "no-store" },
    );
    const data = await resp.json();
    const [agency] = data?.data;
    return agency;
  };

  const getAgencyResources = async () => {
    const data = await fetch(
      `${CONFIG.ADMIN_URL}${EUri.RESOURCES}?filter[resourceAgency][_eq]=${params.agencyId}`,
      { cache: "no-store" },
    );
    const resource = await data.json();
    return resource?.data;
  };

  const agency = (await getAgency()) || [];
  const content = (await getAgencyContent()) || [];
  const resources = (await getAgencyResources()) || [];

  return (
    <AgencyLandingPage
      agency={agency}
      contentPages={content}
      resources={resources}
    />
  );
}
