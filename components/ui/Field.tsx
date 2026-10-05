import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const controlBase =
  "w-full rounded-sm border bg-paper px-3.5 text-base text-ink placeholder:text-muted transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60";

type FieldShellProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function FieldShell({
  id,
  label,
  hint,
  error,
  optional,
  children,
  className,
}: FieldShellProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-small font-medium text-ink">
          {label}
        </label>
        {optional && <span className="text-label text-muted">Optional</span>}
      </div>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-small text-error">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-small text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  wrapperClassName?: string;
};

export function Input({
  id,
  label,
  hint,
  error,
  optional,
  className,
  wrapperClassName,
  ...props
}: InputProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      className={wrapperClassName}
    >
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          controlBase,
          "h-12",
          error ? "border-error" : "border-line-strong hover:border-ink focus:border-ink",
          className,
        )}
        {...props}
      />
    </FieldShell>
  );
}

type TextareaProps = Omit<ComponentPropsWithoutRef<"textarea">, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  wrapperClassName?: string;
};

export function Textarea({
  id,
  label,
  hint,
  error,
  optional,
  className,
  wrapperClassName,
  ...props
}: TextareaProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      className={wrapperClassName}
    >
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          controlBase,
          "min-h-32 resize-y py-3",
          error ? "border-error" : "border-line-strong hover:border-ink focus:border-ink",
          className,
        )}
        {...props}
      />
    </FieldShell>
  );
}

type SelectProps = Omit<ComponentPropsWithoutRef<"select">, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
  wrapperClassName?: string;
};

export function Select({
  id,
  label,
  hint,
  error,
  optional,
  options,
  placeholder,
  className,
  wrapperClassName,
  defaultValue,
  ...props
}: SelectProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      className={wrapperClassName}
    >
      <div className="relative">
        <select
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          defaultValue={defaultValue ?? ""}
          className={cn(
            controlBase,
            "h-12 appearance-none pr-10",
            error ? "border-error" : "border-line-strong hover:border-ink focus:border-ink",
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </div>
    </FieldShell>
  );
}
