import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve conflicting Tailwind utilities
 * (the later class wins). Use this anywhere you build a `className` from props.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
