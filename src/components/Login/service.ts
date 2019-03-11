import { encode } from 'base-64';
import Cookie from 'js-cookie';
import { backendBaseUrl, commonHeaders } from "../../backend";

export function getBasicCredentials(){
  let username = Cookie.get("username");
  let password = Cookie.get("password");
  return encode(`${username}:${password}`);
}

/**
 * @returns Whether the user is logged in with the given credentials.
 */
export default async function register(username: string, password: string): Promise<boolean> {
  Cookie.set("username", username)
  Cookie.set("password", password);
  let response = await fetch(`${backendBaseUrl}/user`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      ...commonHeaders,
      "authorization": "Basic " + getBasicCredentials()
    }
  });

  let loggedIn = response.status == 200

  return loggedIn
}