import BaseField from './base';

export default class PemStringField extends BaseField<string> {
  strip: boolean;

  constructor({ optional = false, defaultValue }: { optional?: boolean; defaultValue?: string }) {
    super({ optional, defaultValue });
  }

  parseString(value: string): string {
    return value.replace(/\\n/g, '\n');
  }
}
