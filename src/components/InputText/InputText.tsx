// Components
import { Slot } from "@radix-ui/react-slot";

// Utilities
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

// Interfaces
interface TextInputRootProps {
  children: ReactNode;
}

interface TextInputIconProps {
  children: ReactNode;
}

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx("flex items-center gap-x-2 border-b  border-b-green-300")}
    >
      {props.children}
    </div>
  );
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot>{props.children}</Slot>;
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="transparent-bg w-96 flex-1 text-green-300  outline-none placeholder:text-green-300"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
