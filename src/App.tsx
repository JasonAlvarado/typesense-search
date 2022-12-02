import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TypesenseInstantsearchAdapter, {
  TypesenseInstantsearchAdapterOptions,
} from "typesense-instantsearch-adapter";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom";

const typesenseConfig: TypesenseInstantsearchAdapterOptions = {
  server: {
    apiKey: import.meta.env.VITE_TYPESENSE_API_KEY, // Be sure to use the search-only-api-key
    nodes: [
      {
        host: import.meta.env.VITE_TYPESENSE_HOST,
        port: Number(import.meta.env.VITE_TYPESENSE_PORT),
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,authors",
  },
};

const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter(
  typesenseConfig
);

interface Props {
  hit: any;
}
const Hit = ({ hit }: Props) => (
  <p>
    {hit.title} - {hit.description} - {hit.authors}
  </p>
);

function App() {
  return (
    <InstantSearch
      indexName="books"
      searchClient={typesenseInstantsearchAdapter.searchClient}
    >
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}

export default App;

