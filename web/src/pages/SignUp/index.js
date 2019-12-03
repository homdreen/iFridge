import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { Image } from '~/pages/_layouts/auth/styles';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  address: Yup.string().required('Endereço é obrigatório'),
  cep: Yup.string().required('Campo CEP é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('O nome é obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, address, cep, password }) {
    dispatch(signUpRequest(name, email, address, cep, password));
  }

  return (
    <>
      <Image src={logo} alt="iFridge" />
      <p>iFridge</p>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <div>
          <Input name="address" type="text" placeholder="Endereço comercial" />
          <Input name="cep" type="text" placeholder="Seu CEP" />
        </div>
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>

        <Link to="/">Já possui cadastro?</Link>
      </Form>
    </>
  );
}
