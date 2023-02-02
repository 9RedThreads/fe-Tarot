import EntriesContext from "./entriesContext";
import { useState } from "react";

const EntriesContextProvider = (props: any) => {
  const [entries, setEntries] = useState();

  const entriesContext = {
    entries: entries,
    setEntries: setEntries,
  };
  return (
    <EntriesContext.Provider value={entriesContext}>
      {props.children}
    </EntriesContext.Provider>
  );
};

export default EntriesContextProvider;
