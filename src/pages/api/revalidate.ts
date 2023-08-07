import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, query } = req;
  // Check for secret to confirm this is a valid request
  if (query?.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!body) {
    return res.status(422).json({ message: "Invalid request body" });
  }
  try {
    const pathToRevalidate = body.__typename === "Page" ? body.data.slug : "";
    await res.revalidate(path.join("/", pathToRevalidate));
    await res.revalidate(path.join("/de", pathToRevalidate));
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}
