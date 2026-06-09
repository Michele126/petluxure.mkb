export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const SiteSettingsPartsFragmentDoc = gql`
    fragment SiteSettingsParts on SiteSettings {
  __typename
  theme
  heroTitleZh
  heroTitleEn
  paymentMethod
  paymentAccount
}
    `;
export const ProductsPartsFragmentDoc = gql`
    fragment ProductsParts on Products {
  __typename
  items {
    __typename
    id
    nameZh
    nameEn
    descZh
    descEn
    category
    price
    image
  }
}
    `;
export const CyberPetsPartsFragmentDoc = gql`
    fragment CyberPetsParts on CyberPets {
  __typename
  items {
    __typename
    id
    nameZh
    nameEn
    icon
    palette
    price
    mood
    energy
  }
}
    `;
export const CyberItemsPartsFragmentDoc = gql`
    fragment CyberItemsParts on CyberItems {
  __typename
  items {
    __typename
    id
    type
    nameZh
    nameEn
    price
    palette
    energy
  }
}
    `;
export const SiteSettingsDocument = gql`
    query siteSettings($relativePath: String!) {
  siteSettings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteSettingsParts
  }
}
    ${SiteSettingsPartsFragmentDoc}`;
export const SiteSettingsConnectionDocument = gql`
    query siteSettingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteSettingsFilter) {
  siteSettingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteSettingsParts
      }
    }
  }
}
    ${SiteSettingsPartsFragmentDoc}`;
export const ProductsDocument = gql`
    query products($relativePath: String!) {
  products(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProductsParts
  }
}
    ${ProductsPartsFragmentDoc}`;
export const ProductsConnectionDocument = gql`
    query productsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProductsFilter) {
  productsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProductsParts
      }
    }
  }
}
    ${ProductsPartsFragmentDoc}`;
export const CyberPetsDocument = gql`
    query cyberPets($relativePath: String!) {
  cyberPets(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CyberPetsParts
  }
}
    ${CyberPetsPartsFragmentDoc}`;
export const CyberPetsConnectionDocument = gql`
    query cyberPetsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CyberPetsFilter) {
  cyberPetsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CyberPetsParts
      }
    }
  }
}
    ${CyberPetsPartsFragmentDoc}`;
export const CyberItemsDocument = gql`
    query cyberItems($relativePath: String!) {
  cyberItems(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CyberItemsParts
  }
}
    ${CyberItemsPartsFragmentDoc}`;
export const CyberItemsConnectionDocument = gql`
    query cyberItemsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CyberItemsFilter) {
  cyberItemsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CyberItemsParts
      }
    }
  }
}
    ${CyberItemsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    siteSettings(variables, options) {
      return requester(SiteSettingsDocument, variables, options);
    },
    siteSettingsConnection(variables, options) {
      return requester(SiteSettingsConnectionDocument, variables, options);
    },
    products(variables, options) {
      return requester(ProductsDocument, variables, options);
    },
    productsConnection(variables, options) {
      return requester(ProductsConnectionDocument, variables, options);
    },
    cyberPets(variables, options) {
      return requester(CyberPetsDocument, variables, options);
    },
    cyberPetsConnection(variables, options) {
      return requester(CyberPetsConnectionDocument, variables, options);
    },
    cyberItems(variables, options) {
      return requester(CyberItemsDocument, variables, options);
    },
    cyberItemsConnection(variables, options) {
      return requester(CyberItemsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/local/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
