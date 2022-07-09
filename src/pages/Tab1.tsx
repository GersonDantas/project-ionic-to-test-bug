import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { InputBase } from 'src/components';
import { Validation } from './tab1-factory';
import Styles from './Tab1.module.scss';

interface Props {
  validation: Validation;
}

const Tab1: React.FC<Props> = ({ validation }) => {
  const [state, setState] = useState({
    forgotEmail: '',
    forgotEmailError: '',
    invalid: ''
  });

  useIonViewWillEnter(() => validate());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => validate(), [state.forgotEmail]);


  const validate = (): void => {
    setState(old => ({ ...old, forgotEmailError: validation.validate(state.forgotEmail) }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState(old => ({ ...old, [e.target.name]: e.target.value, invalid: 'invalid' }));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className={Styles.inputWrap}>
          <InputBase
            type='email'
            name='forgotEmail'
            data-status={state.forgotEmailError ? state.invalid : 'valid'}
            data-testid='input'
            title={state.forgotEmailError}
            id='input-modal'
            onChange={onChange}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
