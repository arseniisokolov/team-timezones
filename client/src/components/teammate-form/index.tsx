import { SyntheticEvent } from "react";
import { Person } from "../../../../types";
import { createPerson } from "../../api/persons";
import { TextField } from "../text-field";
import { toDto } from "./toDto";
import { useTeammateForm } from "./use-teammate-form";

type Props = {
  onCreate: (_: Person[]) => void;
};

export const TeammateForm = ({ onCreate }: Props) => {
  const { fields, updateField } = useTeammateForm();

  const submitForm = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    const updated = await createPerson(toDto(fields));
    onCreate(updated);
  };

  return (
    <form onSubmit={submitForm}>
      <TextField
        label={"Name"}
        value={fields.firstName}
        onChange={updateField("firstName")}
      />
      <TextField
        label={"Surname"}
        value={fields.lastName || ""}
        onChange={updateField("lastName")}
      />
      <TextField
        label={"City"}
        value={fields.city || ""}
        onChange={updateField("city")}
      />
      <TextField
        label={"Timezone"}
        value={fields.timezone || ""}
        onChange={updateField("timezone")}
      />
      <button>Submit teammate</button>
    </form>
  );
};
