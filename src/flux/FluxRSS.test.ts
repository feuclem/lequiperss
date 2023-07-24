import {expect, test} from "vitest";
import {FluxRSS} from "@/flux/FluxRSS";

test("FluxRSS", async () => {
  const fluxRSS = new FluxRSS("https://0925e254-61e5-4dc2-a1a5-e7d35cc0a15b.mock.pstmn.io/testrss")

  const response = await fluxRSS.getArticles()

  expect(response.length).toBe(2);
})