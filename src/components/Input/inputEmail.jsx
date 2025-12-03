import TextInput from "./inputText";
import { Mail } from "lucide-react";

export default function EmailInput({
  label,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      icon={Mail}
    />
  );
}
