import { Directory } from "@/components/directory";
import React from "react";
import { CONFIG } from "../../config/config";
import { EUri } from "../../const/enums";

export default async function Page() {
  const getDirectoryInfo = async () => {
    const agencyInfo = await fetch(CONFIG.ADMIN_URL + EUri.DIRECTORY, {
      cache: "no-store",
    });
    const info = await agencyInfo.json();
    return info.data;
  };

  const agencies = await getDirectoryInfo();
  return <Directory agencies={agencies} />;
}
