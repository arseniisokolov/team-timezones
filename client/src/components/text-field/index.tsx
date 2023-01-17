import { ChangeEventHandler, SyntheticEvent } from "react";
import { useImmutableCallback } from "../../utils/hooks/use-immutable-callback";

export type TextFieldProps = {
    value: string;
    onChange: (_: string) => void;
    label?: string;
};

export const TextField = (props: TextFieldProps) => {
    const { value, onChange, label } = props;

    const handleChange = useImmutableCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        onChange(e.target.value);
    });

    return (
        <label>
            {label}
            <input type="text" value={value} onChange={handleChange} />
        </label>
    );
};