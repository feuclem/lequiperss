import {NextApiRequest, NextApiResponse} from "next";
import {DisplayInApi} from "@/display/DisplayInApi";
import {FluxRSS} from "@/flux/FluxRSS";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = req.query['type']!!.toString()
  const displayInApi = new DisplayInApi()
  let response;

  switch (type) {
    case "FOOT": {
      const fluxRss = new FluxRSS(process.env.URL_FOOT!!)
      response = await displayInApi.displayFluxContent(fluxRss)
      break
    }
    case "NBA": {
      const fluxRss = new FluxRSS(process.env.URL_NBA!!)
      response = await displayInApi.displayFluxContent(fluxRss)
      break
    }
    case "ESPORT": {
      const fluxRss = new FluxRSS(process.env.URL_ESPORT!!)
      response = await displayInApi.displayFluxContent(fluxRss)
      break
    }
    case "TRANSFERT_FOOT": {
      const fluxRss = new FluxRSS(process.env.URL_TRANSFERT_FOOT!!)
      response = await displayInApi.displayFluxContent(fluxRss)
      break
    }
  }

  if(response) res.status(200).json(response)
  else res.status(400).statusMessage = "type does not exist"
}