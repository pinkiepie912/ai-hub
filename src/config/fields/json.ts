import BaseField from './base';

export default class JsonField<T> extends BaseField<T> {
  constructor({ optional = false, defaultValue }: { optional?: boolean; defaultValue?: T }) {
    super({ optional, defaultValue });
  }

  parseString(value: string): T {
    // TODO: Implement Runtime type checking
    return JSON.parse(value);
  }
}
