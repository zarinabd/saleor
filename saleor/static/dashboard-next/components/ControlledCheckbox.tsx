import Checkbox from "material-ui/Checkbox";
import { FormControlLabel } from "material-ui/Form";
import * as React from "react";

interface ControlledCheckboxProps {
  name: string;
  label?: string;
  checked: boolean;
  onChange(event: any);
}

export const ControlledCheckbox: React.StatelessComponent<
  ControlledCheckboxProps
> = ({ checked, name, label, onChange }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={() => onChange({ target: { name, value: !checked } })}
        name={name}
      />
    }
    label={label}
  />
);

export default ControlledCheckbox;