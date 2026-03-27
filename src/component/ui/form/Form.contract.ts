import type {
  // BaseSyntheticEvent,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";
import type { Control, Field, FieldValues } from "react-hook-form";

export interface IFormLabelProps {
  htmlFor?: string;
  className: string;
  children: ReactNode;
}

export interface IBaseType {
  name: string;
  className?: string;
  errMsg?: string;
}

export interface ITextInputProps<T extends FieldValues> extends IBaseType {
  type?: HTMLInputTypeAttribute;
  // handleChange(e: BaseSyntheticEvent): void;
  control: Control<T>;
}

export interface IButtonProps {
  className?: string;
  type: string;
  children: ReactNode;
}

export interface ISingleOption {
  label: string;
  value: string;
}
export interface ISelectOptionProps<T extends FieldValues> extends IBaseType {
  options: Array<{ label: string; value: string }>;
  // handleChange(e: BaseSyntheticEvent): void;
  control: Control<T>;
}

export interface ITextAreadProps<T extends FieldValues> extends IBaseType {
  rows?: number;
  // handleChange(e: BaseSyntheticEvent): void;
  control: Control<T>;
}

export interface IFileTypeProps extends IBaseType {
  // handleChange(name: string, files: Array<File>): void;
}
