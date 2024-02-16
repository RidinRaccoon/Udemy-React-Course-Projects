import * as React from 'react';
import * as RRD from 'react-router-dom';
import { PageContent, NewsletterSignup } from '../components/_index';

export function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export async function action({ request }: RRD.ActionFunctionArgs) {
  const data = await request.formData();
  const email = data.get('email');
  console.log(email);
  // Send to backend newsletter server ...
  return { message: 'Signup successful!' };
}
