import { CSSProperties } from "react";
import Select, { GroupBase, OptionsOrGroups } from "react-select";
import { SelectStyles as Styled } from "./select.styles";

export const SingleSelect = ({
  isSearchable = true,
  isLoading = false,
  isDisabled = false,
  isClearable = false,
  options,
  defaultValue,
  placeholder,
  onChange,
  styles,
}: {
  isSearchable?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  placeholder?: string;
  options: OptionsOrGroups<unknown, GroupBase<unknown>> | string[];
  defaultValue?: { label: string; value: string } | string | null;
  onChange?: (el?: any) => void;
  styles?: CSSProperties;
}) => {
  const mutatedDefaultValue =
    typeof defaultValue === "string"
      ? { label: defaultValue, value: defaultValue }
      : defaultValue;

  const mutatedOptions: OptionsOrGroups<
    unknown,
    GroupBase<unknown>
  > = options.map((option) =>
    typeof option === "string" ? { label: option, value: option } : option
  );

  return (
    <Styled.Container style={styles} placeholder={placeholder}>
      {placeholder ? <Styled.Label>{placeholder}</Styled.Label> : <></>}
      <Select
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        placeholder={""}
        options={mutatedOptions}
        defaultValue={mutatedDefaultValue}
        onChange={onChange}
      />
    </Styled.Container>
  );
};
