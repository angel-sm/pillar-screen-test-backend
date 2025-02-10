import Joi, { PartialSchemaMap } from 'joi';

export class JoiValidator {
  static toObjectSchema<T>(schema: PartialSchemaMap<T>) {
    return Joi.object(schema);
  }

  static validateSchema(schema: Joi.ObjectSchema, data: any) {
    const { error, value } = schema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }
    return value;
  }
}
