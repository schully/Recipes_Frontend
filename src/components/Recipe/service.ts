import { backendBaseUrl, commonHeaders } from "../../backend";
import { getBasicCredentials } from "../Login/service";

export async function fetchRecipe(recipeId: any) {
  let result = await (await fetch(`${backendBaseUrl}/recipe/${recipeId}`, {
    headers: {
      ...commonHeaders,
      "authorization": "Bearer " + getBasicCredentials()
    }
  })).json()

  return result
}