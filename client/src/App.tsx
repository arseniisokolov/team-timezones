import { useEffect, useState } from "react";

import { Person } from "../../types";
import { fetchGeo, fetchPersons } from "./api/persons";
import { PersonRow } from "./components/person-row";

import styles from "./app.module.css";
import { TeammateForm } from "./components/teammate-form";

export const App = () => {
  const [persons, setPersons] = useState<Person[]>();

  const load = async () => {
    const data = await fetchPersons();
    // const geo = await fetchGeo();
    setPersons(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className={styles.app}>
      <header>Compare timezones</header>
      <main>
        {persons?.map((person) => (
          <PersonRow key={person.uuid} {...person} />
        ))}
        <TeammateForm onCreate={setPersons} />
      </main>
    </div>
  );
};
