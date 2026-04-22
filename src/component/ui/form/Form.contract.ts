import type {
  // BaseSyntheticEvent,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";
import type { Control, FieldValues, Path } from "react-hook-form";

export interface IFormLabelProps {
  htmlFor?: string;
  className?: string;
  children: ReactNode;
}

export interface IBaseType {
  className?: string;
  errMsg?: string;
}

export interface ITextInputProps<T extends FieldValues> extends IBaseType {
  type?: HTMLInputTypeAttribute;
  // handleChange(e: BaseSyntheticEvent): void;
  control: Control<T>;
  name: Path<T>;
}

export interface IButtonProps {
  className?: string;
  type: string;
  children: ReactNode;
  disabled?: boolean;
}

export interface ISingleOption {
  label: string;
  value: string;
}
export interface ISelectOptionProps<T extends FieldValues> extends IBaseType {
  options: Array<{ label: string; value: string }>;
  // handleChange(e: BaseSyntheticEvent): void;
  control: Control<T>;
  name: Path<T>;
}

export interface ITextAreadProps<T extends FieldValues> extends IBaseType {
  rows?: number;
  // handleChange(e: BaseSyntheticEvent): void;
  control: Control<T>;
  name: Path<T>;
}

export interface IFileTypeProps<T extends FieldValues> extends IBaseType {
  // handleChange(name: string, files: Array<File>): void;
  control: Control<T>;
  name: Path<T>;
}
