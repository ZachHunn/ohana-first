export type Agency = {
  id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  agencyName: string;
  agencyShortName: string;
  emailAddress: string;
  phoneNumber: string;
  altPhoneNumber: string | null;
  location: string;
  description: string;
  services: Service[];
  agencyContentPages: number[];
  resources: number[];
};

export type DirectoryAgencyDetails = {
  id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  name: string;
  location: string;
  phoneNumber: string;
  altPhoneNumber: string | null;
  email: string;
};

export type ContentPage = {
  id: number;
  status: "published" | "draft" | "archived"; // Assuming status could have multiple states
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  contentDescription: string | null;
  pageImage: string | null;
  pageContent: string;
  agency: number;
  contentPageName: string;
};

export type Resource = {
  id: number;
  status: "published" | "draft" | "archived"; // Adjust according to possible status values
  sort: number | null;
  user_created: string; // UUID string
  date_created: string; // ISO 8601 date string
  user_updated: string | null; // UUID string or null
  date_updated: string | null; // ISO 8601 date string or null
  shortDescription: string;
  title: string;
  type: "link" | "doc"; // Adjust according to possible types
  urlLink: string | null; // URL or null if not applicable
  document: string | null; // Document reference or null if not applicable
  resourceAgency: number;
};
export type Service = {
  serviceName: string;
  serviceDescription: string;
};
