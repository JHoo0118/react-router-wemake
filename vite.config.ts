import { reactRouter } from "@react-router/dev/vite";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "nomadcoders",
  project: "wemake",
  authToken: "",
  // ...
};
export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    reactRouterHonoServer({
      dev: {
        exclude: [/^\/(resources)\/.+/],
      },
    }),
    tsconfigPaths(),
  ],
});
