import gql from "graphql-tag";

export const GET_ABOUT = gql`
  {
    company {
      ceo
      founded
      launch_sites
      links {
        flickr
        twitter
        website
      }
      name
      summary
      valuation
    }
    launchesPast(limit: 1, offset: 3) {
      links {
        flickr_images
      }
    }
  }
`;

export const GET_LAUNCH = gql`
  query Launch($offset: Int!) {
    launchesPast(limit: 12, offset: $offset) {
      mission_name
      launch_date_local
      launch_success
      links {
        wikipedia
        flickr_images
      }
      details
    }
  }
`;
