
/**
 * @returns The ID of the created recioe.
 */
export async function submitRecipe(name,description,instructions){
  let result = await fetch("://localhost:8080/recipes_backend/", {
    "method": "POST",
    body: JSON.stringify({
      name,
      description,
      instructions,
    })
  })

  result = await result.json()

  return result.recipe_id
}