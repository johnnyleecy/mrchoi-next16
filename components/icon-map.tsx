import type { ReactNode } from "react";
import type { IconName } from "@/lib/site";
import {
  Lock,
  Key,
  Wrench,
  Door,
  Frame,
  Cabinet,
  Package,
  Clock,
  List,
  User,
  Camera,
} from "./icons";

export const iconMap: Record<IconName, ReactNode> = {
  lock: <Lock className="h-6 w-6" />,
  key: <Key className="h-6 w-6" />,
  wrench: <Wrench className="h-6 w-6" />,
  door: <Door className="h-6 w-6" />,
  frame: <Frame className="h-6 w-6" />,
  cabinet: <Cabinet className="h-6 w-6" />,
  package: <Package className="h-6 w-6" />,
  clock: <Clock className="h-6 w-6" />,
  list: <List className="h-6 w-6" />,
  user: <User className="h-6 w-6" />,
  camera: <Camera className="h-6 w-6" />,
};
