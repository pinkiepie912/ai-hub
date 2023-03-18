import BaseField from './base';
import { UnkownBooleanValueError } from '../exceptions';

const FALSE_VALUES = ['f', 'false', 'no', 'n', 'off', '0'];
const TRUE_VALUES = ['t', 'true', 'yes', 'y', 'on', '1'];

export default class BooleanField extends BaseField<boolean> {
  trueValues: string[];
  falseValues: string[];

  constructor({
    trueValues = TRUE_VALUES,
    falseValues = FALSE_VALUES,
    optional = false,
    defaultValue,
  }: {
    trueValues?: string[];
    falseValues?: string[];
    optional?: boolean;
    defaultValue?: boolean;
  }) {
    super({ optional, defaultValue });
    this.trueValues = trueValues;
    this.falseValues = falseValues;
  }

  parseString(value: string): boolean {
    if (this.trueValues.includes(value)) {
      return true;
    }
    if (this.falseValues.includes(value)) {
      return false;
    }
    throw new UnkownBooleanValueError(`${value} is invalid`);
  }
}
