import BaseField from './base';

export default class NumberField extends BaseField<number> {
  parseString(value?: string): number {
    return Number(value);
  }
}
