import { render } from "@/utils/testUtils";
import { Seo } from ".";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe("<Seo />", () => {
  it("should render the meta tags", () => {
    const props = {
      title: "title page",
      excerpt: "string",
      seo: {
        title: "seo title",
        description: "meta description",
      },
      heroImage: {
        src: "url",
        alt: "alt text",
        width: 300,
        height: 400,
      },
    };

    render(<Seo {...props} />, { container: document.head });

    expect(document.title).toBe("title page");
  });
});
