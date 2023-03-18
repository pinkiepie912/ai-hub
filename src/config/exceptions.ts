export class MissingConfigValueError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class UnkownBooleanValueError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class InvalidValueError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class InvalidJsonObjError extends Error {}
