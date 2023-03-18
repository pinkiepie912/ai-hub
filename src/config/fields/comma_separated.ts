import BaseField from './base';

export default class CommaSeparatedStringField extends BaseField<string[]> {
  strip: boolean;

  constructor({
    strip = false,
    optional = false,
    defaultValue,
  }: {
    strip?: boolean;
    optional?: boolean;
    defaultValue?: string[];
  }) {
    super({ optional, defaultValue });
    this.strip = strip;
  }

  parseString(value: string): string[] {
    let replacedValue = value;
    if (this.strip) {
      replacedValue = value.replace(' ', '');
    }
    return replacedValue.split(',');
  }
}
