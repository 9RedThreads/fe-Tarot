import React from "react";

const EntriesContext = React.createContext({
  entries: [],
  setEntries: (entry: any) => {},
});

export default EntriesContext;
