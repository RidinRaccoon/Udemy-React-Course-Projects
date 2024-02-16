/* eslint-disable @typescript-eslint/no-throw-literal */
import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as authUtils from '../util/auth';
// Components
import { AuthForm } from '../components/AuthForm';

export function AuthenticationPage() {
  return <AuthForm />;
}

// Sign Up/Create New User action
export async function action({ request }: RRD.ActionFunctionArgs) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw RRD.json({ message: 'Unsupported mode.' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch(`http://localhost:3001/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) return response;

  if (!response.ok)
    throw RRD.json(
      { message: 'Failed to authenticate user.' },
      { status: 500 },
    );

  const resData = await response.json();
  authUtils.setAuthToken(resData.token);

  // TODO: Manage token
  return RRD.redirect('/');
}
