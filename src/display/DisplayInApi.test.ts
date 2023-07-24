import {expect, test} from "vitest";
import {FluxRSS} from "@/flux/FluxRSS";
import {DisplayInConsole} from "@/display/DisplayInConsole";
import {DisplayInApi} from "@/display/DisplayInApi";

test("DisplayInConsole", async () => {
  const fluxRSS = new FluxRSS("https://0925e254-61e5-4dc2-a1a5-e7d35cc0a15b.mock.pstmn.io/testrss")
  const displayInApi = new DisplayInApi()

  const result = await displayInApi.displayFluxContent(fluxRSS)

  expect(result.length).toBe(2)
})