import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const logo = (
  <>
    <img
      className="w-16 md:w-20 lg:w-24 dark:hidden"
      src={"/images/stream-light.svg"}
      alt="Stream Finance logo"
    />

    <img
      className="w-16 md:w-20 lg:w-24 hidden dark:block"
      src={"/images/stream-dark.svg"}
      alt="Stream Finance logo"
    />
  </>
);

export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: <>{logo}</>,
  },
  links: [
    {
      text: "Documentation",
      url: "/",
      active: "nested-url",
    },
    {
      text: "Web App",
      url: "https://v2.streamprotocol.money",
    },
    {
      text: "Dashboard",
      url: "https://dashboard-v2.streamprotocol.money",
    },
  ],
  githubUrl: "https://github.com/StreamDefi/contracts",
};
