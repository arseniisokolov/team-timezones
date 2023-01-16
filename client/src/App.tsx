import { useEffect, useState } from "react";

import { Person } from "../../types";
import { fetchPersons } from "./api/persons";
import { PersonRow } from "./components/person-row";

import styles from "./app.module.css";

export const App = () => {
  const [persons, setPersons] = useState<Person[]>();

  const load = async () => {
    const data = await fetchPersons();
    setPersons(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className={styles.app}>
      <header>Compare timezones</header>
      <main>
        {persons?.map((person) => <PersonRow key={person._id} {...person} />)}
      </main>
    </div>
  );
};
