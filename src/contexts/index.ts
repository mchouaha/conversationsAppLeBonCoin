import { createContext } from "react"

export const interceptError = createContext({
    error: '',
    serError: (err: string) => {}
});