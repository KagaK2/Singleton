import React from "react";

export type ButtonProps = {
  children: React.ReactNode,
  type: "filled" | "outline" | "ghost",
  color: string,
  hasIcon?: boolean,
}