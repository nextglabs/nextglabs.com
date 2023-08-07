import type { NextApiRequest, NextApiResponse } from "next";
import { createRequest, createResponse, RequestOptions } from "node-mocks-http";
import handler from "../pages/api/revalidate";

type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
type APiResponse = NextApiResponse & ReturnType<typeof createResponse>;

const secret = process.env.REVALIDATE_TOKEN;
const mockPageBody = {
  __typename: "Page",
  data: { slug: "test-slug" },
};
const mockProjectBody = {
  __typename: "Project",
};

export const testHandler = async (options: RequestOptions) => {
  const req = createRequest<ApiRequest>(options);
  const res = createResponse<APiResponse>();

  req.body = options.body || null;
  res.revalidate = jest.fn();
  await handler(req, res);
  return res;
};

describe("/api/revalidate Endpoint", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 401 if secret is invalid", async () => {
    const res = await testHandler({
      body: {
        __typename: "Page",
        data: { slug: "test-slug" },
      },
      query: { secret: "invalid_token" },
    });

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toEqual({
      message: "Invalid token",
    });
  });

  it("should return 422 if request body is invalid", async () => {
    const res = await testHandler({ query: { secret }, body: null });

    expect(res.statusCode).toBe(422);
    expect(res._getJSONData()).toEqual({
      message: "Invalid request body",
    });
  });

  it("should revalidate slug when the content type is `Page`", async () => {
    const res = await testHandler({ query: { secret }, body: mockPageBody });

    expect(res.revalidate).toHaveBeenCalledWith("/test-slug");
    expect(res.revalidate).toHaveBeenCalledWith("/de/test-slug");
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ revalidated: true });
  });

  it("should revalidate home page when the content type is NOT `Page`", async () => {
    const res = await testHandler({ query: { secret }, body: mockProjectBody });

    expect(res.revalidate).toHaveBeenCalledWith("/");
    expect(res.revalidate).toHaveBeenCalledWith("/de");
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ revalidated: true });
  });

  it("should return 500 if revalidation fails", async () => {
    const res = await testHandler({
      query: { secret },
      body: { ...mockPageBody, data: mockPageBody },
    });
    res.revalidate.mockRejectedValue(new Error("Error revalidating"));

    expect(res.statusCode).toBe(500);
    expect(res._getJSONData()).toEqual({ message: "Error revalidating" });
  });
});
