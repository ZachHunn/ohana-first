import { ResourceSection } from "@/components/resource-section";
import { CONFIG } from "@/config/config";
import { EUri } from "@/const/enums";

export default async function Page() {
  const getResourceData = async () => {
    const data = await fetch(CONFIG.ADMIN_URL + EUri.RESOURCES);
    const resource = await data.json();

    return resource.data;
  };

  const resources = await getResourceData();

  return <ResourceSection resources={resources} />;
}
