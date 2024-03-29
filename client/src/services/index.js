import { request, gql } from "graphql-request";

const graphqlAPI = process.env.REACT_APP_API_KEY;

export const getWebTeam = async () => {
  const query = gql`
    {
      webTeamsConnection {
        edges {
          node {
            teamMembers {
              alumni
              batch
              linkedIn
              name
              image {
                url
              }
            }
          }
          cursor
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    // console.log(result)
    return result.webTeamsConnection.edges;
  } catch (error) {
    console.error("Error fetching web team:", error);
    return []; // Return empty array or handle error as appropriate
  }
};
export const getRadTeam = async () => {
  const query = gql`
    {
      radTeamsConnection {
        edges {
          node {
            teamMembers {
              alumni
              batch
              linkedIn
              image {
                url
              }
              name
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    // console.log(result)
    return result.radTeamsConnection.edges;
  } catch (error) {
    console.error("Error fetching rad team:", error);
    return []; // Return empty array or handle error as appropriate
  }
};
export const getContentTeam = async () => {
  const query = gql`
    {
      contentTeamsConnection {
        edges {
          node {
            teamMembers {
              batch
              alumni
              linkedIn
              name
              image {
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    // console.log(result)
    return result.contentTeamsConnection.edges;
  } catch (error) {
    console.error("Error fetching content team:", error);
    return []; // Return empty array or handle error as appropriate
  }
};
export const getFieldOfficer = async () => {
  const query = gql`
    {
      fieldOfficersConnection {
        edges {
          node {
            teamMembers {
              alumni
              batch
              name
              linkedIn
              image {
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    // console.log(result)
    return result.fieldOfficersConnection.edges;
  } catch (error) {
    console.error("Error fetching field officers team:", error);
    return []; // Return empty array or handle error as appropriate
  }
};
export const getDesignTeam = async () => {
  const query = gql`
    {
      designTeamsConnection {
        edges {
          node {
            teamMembers {
              alumni
              batch
              name
              linkedIn
              image {
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    // console.log(result)
    return result.designTeamsConnection.edges;
  } catch (error) {
    console.error("Error fetching design team:", error);
    return []; // Return empty array or handle error as appropriate
  }
};
export const getMarketingTeam = async () => {
  const query = gql`
    {
      marketingAndSponsorshipTeamsConnection {
        edges {
          node {
            teamMembers {
              alumni
              batch
              name
              linkedIn
              image {
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    // console.log(result)
    return result.marketingAndSponsorshipTeamsConnection.edges;
  } catch (error) {
    console.error("Error fetching marketingAndSponsorshipTeamsConnection team:", error);
    return []; // Return empty array or handle error as appropriate
  }
};
