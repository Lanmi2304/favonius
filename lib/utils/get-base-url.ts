/**
 * Returns the base URL of the application.
 *
 * The base URL is determined by the value of `NEXT_PUBLIC_APP_URL` environment variable.
 *
 * @returns The base URL of the application.
 */
export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_APP_URL;
};
