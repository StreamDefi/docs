import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/",
  // @ts-expect-error - docs is not typed
  source: docs.toFumadocsSource(),
});
