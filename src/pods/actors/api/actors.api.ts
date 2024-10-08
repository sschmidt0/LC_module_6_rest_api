import { gql } from '@apollo/client';
import { ActorApi } from 'core/api-models';

export const getActors = async (): Promise<ActorApi[]> => {
  const data = await fetch('https://rickandmortyapi.com/api/character').then(
    (response) => response.json()
  );

  return data.results;
};

export const GET_ACTORS_GQL = gql`
  query GetActors {
    characters {
      results {
        id
        name
      }
    }
  }
`;

export const GET_FILTERED_ACTORS_GQL = gql`
  query ($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      results {
        name
        id
      }
    }
  }
`;
