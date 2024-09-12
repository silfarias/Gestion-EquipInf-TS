import { Response } from "express";

export const handleControllerError = (error: unknown, res: Response): Response => {
    if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
    } else {
        return res.status(500).json({ message: "se produjo un error" });
    }
};