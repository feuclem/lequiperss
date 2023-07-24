import {expect, test} from "vitest";
import {FluxRSS} from "@/flux/FluxRSS";
import {DisplayInConsole} from "@/display/DisplayInConsole";

test("DisplayInConsole", async () => {
  const fluxRSS = new FluxRSS("https://0925e254-61e5-4dc2-a1a5-e7d35cc0a15b.mock.pstmn.io/testrss")
  const displayInConsole = new DisplayInConsole()

  await displayInConsole.displayFluxContent(fluxRSS)
})