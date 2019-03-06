
/**
 * @returns The ID of the created recioe.
 */
export async function submitRecipe(name?:string,description?:string,instructions?:string){
  let result = await fetch("://localhost:8080/recipes_backend/", {
    "method": "POST",
    body: JSON.stringify({
      name,
      description,
      instructions,
    })
  })

  result = await result.json()

  return result
}