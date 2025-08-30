import { createPortal } from "react-dom";

export default function PopupPortal({ children }) {
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
}