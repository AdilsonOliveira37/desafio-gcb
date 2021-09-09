import { Field, Form, Formik, FormikHelpers } from 'formik';
import { viacepAPI } from '../../services/viacep';

import styles from './styles.module.scss';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   } else if (values.name.length > 15) {
//     errors.name = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

interface Values {
  name: string;
  email: string;
  birthdate: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

interface Errors {
  name?: string;
  email?: string;
  birthdate?: string;
  cep?: string;
  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
}

export function SignupForm() {

  async function handleFillAddress(event: any, setFieldValue: any) {
    const cep = event.target.value.replace(/[^0-9]/g, '');

    console.log(cep);

    if (cep.length === 8) {
      await viacepAPI.get(cep + '/json')
        .then(function (res) {
          console.log(res.data);
          setFieldValue('street', res.data.logradouro);
          setFieldValue('district', res.data.bairro);
          setFieldValue('complement', res.data.complemento);
          setFieldValue('city', res.data.localidade);
          setFieldValue('state', res.data.uf);
        });
    }
    else {
      alert('Incorrect CEP');
    }
  }

  function validate(values: Values) {
    const errors = {} as Errors;

    if (!values.name)
      errors.name = 'please tell us your name';

    if (!values.email)
      errors.email = 'could we iniform your email?'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = 'this address is not valid ☹';

    if (!values.birthdate){
      console.log(values)
      errors.birthdate = "what's the date of your birth?";
    }

    if (!values.cep)
      errors.cep = 'what is the CEP for your city?';

    if (!values.street)
      errors.street = 'on which street are you located?';

    if (!values.number)
      errors.number = 'could you tell us your home number?';

    if (!values.city)
      errors.city = 'Which city do you live in?';

    return errors;
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        birthdate: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
      }}
      validate={validate}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        setTimeout(() => {
          localStorage.setItem('@healthy:account', JSON.stringify(values))

          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ setFieldValue, errors }) => (
        <Form className={styles.container}>
          <div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                placeholder="John" />
              <span className={styles.error}>{errors.name}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
              />
              <span className={styles.error}>{errors.email}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="birthdate">Birth date</label>
              <Field
                id="birthdate"
                name="birthdate"
                type="date"
              />
              <span className={styles.error}>{errors.birthdate}</span>
            </div>
          </div>

          <div>
            <div className={styles.formGroup}>
              <label htmlFor="cep">CEP</label>
              <Field
                id="cep"
                name="cep"
                placeholder="37701-024"
                type="text"
                accept="number"
                onBlur={(event: any) => handleFillAddress(event, setFieldValue)}
              />
              <span className={styles.error}>{errors.cep}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="street">Street</label>
              <Field
                id="street"
                name="street"
                placeholder="Rua Jose Faria da Fonseca"
                type="text"
              />
              <span className={styles.error}>{errors.street}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="number">Number</label>
              <Field
                id="number"
                name="number"
                placeholder="79"
                type="text"
              />
              <span className={styles.error}>{errors.number}</span>
            </div>
          </div>

          <div>
            <div className={styles.formGroup}>
              <label htmlFor="complement">Complement</label>
              <Field
                id="complement"
                name="complement"
                placeholder="Rua Jose Faria da Fonseca"
                type="text"
              />
              <span className={styles.error}>{errors.complement}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="district">District</label>
              <Field
                id="district"
                name="district"
                placeholder="Centro"
                type="text"
              />
              <span className={styles.error}>{errors.district}</span>
            </div>
          </div>

          <div>
            <div className={styles.formGroup}>
              <label htmlFor="state">State</label>
              <Field
                id="state"
                name="state"
                placeholder="MG"
                type="text"
              />
              <span className={styles.error}>{errors.state}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="city">City / Town</label>
              <Field
                id="city"
                name="city"
                placeholder="Monte Santo de Minas"
                type="text"
              />
              <span className={styles.error}>{errors.city}</span>
            </div>
          </div>
          <button type="submit">Submit</button>
          <a href="/">Do you have a account? ...Click here</a>
        </Form>
      )
      }

    </Formik >
  );

}



