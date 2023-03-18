import BaseField from './fields/base';
import { MissingConfigValueError } from './exceptions';

export function loadFromEnv<ConfigType>(prefix: string, schema: { [key: string]: BaseField<any> }, forceUpperkey = true): ConfigType {
  const config: { [key: string]: any } = {};

  for (const key in schema) {
    const field = schema[key];
    let prefixedKey = prefix + key;
    if (forceUpperkey) prefixedKey = prefixedKey.toUpperCase();

    let value = process.env[prefixedKey];
    if (value === undefined) {
      if (field.optional) continue;
      if (field.defaultValue !== undefined) {
        config[key] = field.defaultValue;
        continue;
      }
      throw new MissingConfigValueError(`${key} is missing`);
    }

    value = field.parseString(value);
    config[key] = value;
  }

  return config as ConfigType;
}
