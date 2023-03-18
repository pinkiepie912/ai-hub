import BaseField from './base';
import { InvalidValueError } from '../exceptions';

export default class OneOfStringField extends BaseField<string> {
  values: string[];

  constructor({
    values,
    optional = false,
    defaultValue,
  }: {
    values: string[];
    optional?: boolean;
    defaultValue?: string;
  }) {
    super({ optional, defaultValue });
    this.values = values;
  }

  parseString(value: string): string {
    if (!this.values.includes(value)) {
      throw new InvalidValueError(`${value} is not in given array: ${this.values}`);
    }
    return value;
  }
}
