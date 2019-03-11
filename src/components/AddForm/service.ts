import { commonHeaders } from "../../backend";
import { getBasicCredentials } from "../Login/service";

/**
 * @returns The ID of the created recioe.
 */
export async function submitRecipe(name:string, description:string, instructions:string, category: string){
  let result = await fetch("//localhost:8080/recipes/api/addrecipe", {
    "method": "POST",
    headers: {
      ...commonHeaders,
      "authorization": "Basic " + getBasicCredentials()
    },
    body: JSON.stringify({
      name,
      description,
      instructions,
      category
    })
  })

  let { recipe } = await result.json()

  return recipe.id
}