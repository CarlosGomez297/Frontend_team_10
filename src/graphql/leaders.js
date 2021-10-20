import {gql} from "@apollo/client";


export const GET_LEADERS = gql`
query{
    leaders{
        name
      }
}
`;