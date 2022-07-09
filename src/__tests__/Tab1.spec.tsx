import { render, screen, waitFor } from '@testing-library/react';
import Tab1 from 'src/pages/Tab1';
import { Validation } from 'src/pages/tab1-factory';

class ValidationStub implements Validation {
  errorMessage?: string;

  validate (value: string): string {
    return this.errorMessage;
  }
}

type SutParams = {
  validationError: string;
};

jest.mock('@ionic/react', () => ({ ...jest.requireActual<object>('@ionic/react'), useIonViewWillEnter: (validate: Function) => { validate(); } }));

const makeSut = (params?: SutParams): void => {
  const validationStub = new ValidationStub();
  validationStub.errorMessage = params?.validationError;
  render(
    <Tab1 validation={validationStub} />
  );
};

describe('InputBase', () => {
  test('Should start initial with state', async () => {
    const validationError = "any_error";
    makeSut({ validationError });

    await waitFor(() => expect(screen.getByTestId('input')).toHaveAttribute('data-status', ''));
  });
});
