import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const payload = JSON.parse(req?.body || "");
  console.log(payload.data.slug);

  try {
    await res.revalidate(payload.data.slug);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
