"use client";
import { CONFIG } from "@/config/config";
import { EUri } from "@/const/enums";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Agency } from "@/types";
import { AgencyList } from "@/components/agency-list";
import { LoadingLayout } from "@/components/loading-layout";
import React from "react";

export default function Page() {
  const { data: agencies, isLoading } = useQuery({
    queryKey: ["agencies"],
    queryFn: async () => {
      const response = await fetch(CONFIG.ADMIN_URL + EUri.AGENCIES, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error("Oh no");
      }
      return response.json();
    },
  });

  const agencyList = useMemo(() => {
    return agencies?.data
      ?.sort((a: Agency, b: Agency) => a.agencyName.localeCompare(b.agencyName))
      ?.map((agency: Agency) => agency);
  }, [agencies?.data]);

  console.log(agencyList);
  if (isLoading) {
    return <LoadingLayout />;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center pl-4">
        Helping Agencies
      </h1>
      <div className="w-full max-h-auto mt-6">
        {/* Alphabet Selector goes here*/}
        <AgencyList agencyList={agencyList} />
      </div>
    </div>
  );
}
