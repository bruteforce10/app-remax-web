import request, { gql } from "graphql-request";

export async function GET() {
  const query = gql`
    query TopNavigations {
      topNavigations {
        text
        id
        iconName {
          url
        }
      }
      menus {
        menu
      }
      headers {
        heading
        description {
          html
        }
        subHeading
      }
      abouts {
        description {
          html
        }
        heading
        headingHighligt
      }
      bankPartners {
        image {
          url
        }
      }
      whyMes {
        heading
        shortDescription
        description {
          html
        }
        icon {
          url
        }
        image {
          url
        }
        number
      }
      featureTrainings {
        heading
        image {
          url
        }
        description
        idSort
      }
      testimonis {
        job
        name
        avatar {
          url
        }
        description
      }
    }
  `;

  const result = await request(
    "https://api-us-west-2.hygraph.com/v2/clvptosws04zt07w3oohqtove/master",
    query
  );
  return Response.json({ data: result, status: 200 });
}
