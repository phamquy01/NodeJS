import joi from "joi";

export const email = joi
  .string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']} })
  .required();

export const password = joi
  .string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  .required();
