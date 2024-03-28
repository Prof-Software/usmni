
import { request, gql } from 'graphql-request';

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
    console.error('Error fetching web team:', error);
    return []; // Return empty array or handle error as appropriate
  }
};