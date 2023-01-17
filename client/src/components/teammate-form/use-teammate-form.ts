import { useState } from "react";

const FIELDS = {
  firstName: "",
  timezone: "",
  lastName: "",
  city: "",
} as const;

export type FormFields = {
  firstName: string;
  timezone: string;
  lastName?: string;
  city?: string;
};

export function useTeammateForm() {
  const [fields, setFields] = useState<FormFields>(FIELDS);

  const updateField =
    (fieldName: keyof FormFields) => (value: FormFields[typeof fieldName]) => {
      setFields((prev) => ({ ...prev, [fieldName]: value }));
    };

  const resetForm = () => {
    setFields(FIELDS);
  };

  return { fields, updateField, resetForm };
}
