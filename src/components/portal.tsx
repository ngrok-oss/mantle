"use client";

import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type Props = PropsWithChildren<{ container?: HTMLElement | null }>;

export const Portal = ({ children, container }: Props) => <>{container ? createPortal(children, container) : null}</>;
