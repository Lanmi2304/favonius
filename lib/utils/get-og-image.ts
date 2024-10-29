import { getBaseUrl } from "./get-base-url";

interface GetOgImageUrlParams {
  title: string;
  description?: string;
  image?: string;
}

/**
 * Generates the Open Graph (OG) image URL for a given title, with optional description and image parameters.
 *
 * - If `image` is provided, the generated OG image will display this image as the main source.
 * - If `description` is provided, it will be included as additional text in the OG image.
 * - The generated URL will be in the format `${baseUrl}/api/og?title=<title>&description=<description>&image=<image>`.
 *
 * @param title - The title of the content.
 * @param description - The optional description of the content.
 * @param image - The optional image URL to use in the OG image.
 * @returns The complete Open Graph image URL.
 */
export const getOgImageUrl = ({
  title,
  description,
  image,
}: GetOgImageUrlParams) => {
  const params = new URLSearchParams({ title });
  if (description) {
    params.append("description", description);
  }
  if (image) {
    params.append("image", image);
  }

  return `${getBaseUrl()}/api/og?${params.toString()}`;
};
