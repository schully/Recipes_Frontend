import { backendBaseUrl, commonHeaders } from "../../backend";
import { getBasicCredentials } from "../Login/service";

export async function fetchRecipes() {
  let result = await (await fetch(`${backendBaseUrl}/recipes/`, {
    headers: {
      ...commonHeaders,
      "authorization": "Basic " + getBasicCredentials()
    }
  })).json()

  return result
}