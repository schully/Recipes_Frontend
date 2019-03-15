import { backendBaseUrl, commonHeaders } from "../../backend";
import { getBasicCredentials } from "../Login/service";

export async function fetchRecipe(recipeId: any) {
  let result = await (await fetch(`${backendBaseUrl}/recipe/${recipeId}`, {
    headers: {
      ...commonHeaders,
      "authorization": "Basic " + getBasicCredentials()
    }
  })).json()

  return result
}

export async function submitComment(recipeId: any,text:string){
  let result = await fetch(`${backendBaseUrl}/${recipeId}/addcomment`, {
    "method": "POST",
    headers: {
      ...commonHeaders,
      "authorization": "Basic " + getBasicCredentials()
    },
    body: JSON.stringify({
      text
    })
  })

  let { recipe: comment } = await result.json()

  return comment.id
}
