import { useContext } from "react";
import { AlertContext } from "../context";

export function useAlert() {
  return useContext(AlertContext);
}