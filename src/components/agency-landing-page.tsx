/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1MvsMPrkoNi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Agency, ContentPage, Resource, Service } from "@/types";
import { FC } from "react";
import { CONFIG } from "@/config/config";
import { EUri } from "@/const/enums";

type AgencyLandingPageProp = {
  agency: Agency;
  resources: Resource[];
  contentPages: ContentPage[];
};

export const AgencyLandingPage: FC<AgencyLandingPageProp> = async ({
  agency,
  resources,
  contentPages,
}) => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {agency.agencyName}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {agency.description}
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a variety of services designed to meet your personal
                  needs and help you achieve your goals. Discover how our
                  services can enhance your daily life and support your
                  aspirations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {agency.services.map((service: Service, index) => {
                return (
                  <div className="grid gap-1" key={index}>
                    <InfoIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">{service.serviceName}</h3>
                    <p className="text-muted-foreground">
                      {service.serviceDescription}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <main>
          {resources.length !== 0 ? (
            <section className="w-full py-6 md:py-12 lg:py-24 bg-background">
              <div className="container items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
                    Resources
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto">
                    Explore our collection of downloads and useful links.
                  </p>
                  <section>
                    <h2 className="text-2xl font-bold my-4 mx-auto text-center">
                      Downloads
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {resources.map((resource, index) => {
                        if (resource.type === "doc") {
                          return (
                            <Link
                              key={index}
                              href={`${CONFIG.ADMIN_URL}/assets/${resource.document}`}
                              className="bg-card p-4 rounded-md shadow hover:bg-accent hover:text-accent-foreground transition-colors"
                              prefetch={false}
                            >
                              <h3 className="text-lg font-medium mb-2">
                                {resource.title}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {resource.shortDescription}.
                              </p>
                            </Link>
                          );
                        }
                      })}
                    </div>
                  </section>
                  <section>
                    <h2 className="text-2xl font-bold my-6 mx-auto text-center">
                      Useful Links
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {resources.map((resource, index) => {
                        if (resource.type === "link") {
                          return (
                            <Link
                              key={index}
                              href={resource.urlLink}
                              className="bg-card p-4 rounded-md shadow hover:bg-accent hover:text-accent-foreground transition-colors"
                              prefetch={false}
                            >
                              <h3 className="text-lg font-medium mb-2">
                                {resource.title}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {resource.shortDescription}
                              </p>
                            </Link>
                          );
                        }
                      })}
                    </div>
                  </section>
                </div>
              </div>
            </section>
          ) : null}
        </main>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Latest Articles
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stay Up-to-Date with Our Blog
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our latest articles and insights to help you
                  navigate the ever-changing business landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {contentPages.map((page: ContentPage, index) => {
                return (
                  <div className="grid gap-4" key={index}>
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Article Image"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">
                        {page.contentPageName}
                      </h3>
                      <p className="text-muted-foreground">
                        {page.contentDescription}
                      </p>
                      <Link
                        href={`/agency/${agency.id}/content/${page.id}`}
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                        prefetch={false}
                      >
                        Read More <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function ReceiptIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  );
}
function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
