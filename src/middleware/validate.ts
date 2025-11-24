import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validate =
  (schema: ObjectSchema, source: "body" | "params" = "body") =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[source], { abortEarly: false });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.details.map((d) => d.message),
      });
    }

    next();
  };
