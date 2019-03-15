import { backendBaseUrl, commonHeaders } from "../../backend";
import { getBasicCredentials } from "../Login/service";

export async function fetchComments(recipeId: any) {
  let result = await (await fetch(`${backendBaseUrl}/${recipeId}/comments`, {
    headers: {
      ...commonHeaders,
      "authorization": "Basic " + getBasicCredentials()
    }
  })).json()

  return result
}