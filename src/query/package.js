import { gql, useQuery } from '@apollo/client';

export const QueryPackages = gql`
    query GetPackages {
    packages {
        id
        name
    }
    }
`;

export const QueryPackage = gql`
    query GetPackage {
        package {
            id
            name
        }
    }
`;


export const usePackagesQuery = () => useQuery(QueryPackages);