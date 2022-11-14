import { createContext } from "react";
import { authContextInterface } from "../interfaces";

export const AuthContext = createContext<authContextInterface | null>(null);
