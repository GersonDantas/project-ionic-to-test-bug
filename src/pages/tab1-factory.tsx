import React from 'react';
import Tab1 from './Tab1';

export interface Validation {
  validate: (value: string) => string;
}

export class RequiredFieldValidation implements Validation {
  constructor (readonly field: string) { }

  validate (value: string): string {
    return value !== '' ? null : new RequiredFieldError().message;
  }
}

class RequiredFieldError extends Error {
  constructor () {
    super('Este campo obrigatório.');
    this.name = 'RequiredFieldError';
  }
}

export const MakeTab1: React.FC = () => {
  return (
    <Tab1 validation={new RequiredFieldValidation('forgotEmail')} />
  );
};
