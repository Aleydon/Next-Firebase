import Link from 'next/link';

import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';

import { Home, SignUp } from '@/constants/routes';

export default function SignIn() {
  return (
    <Form title="Login">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Link href={Home}>
        <Button color="primary">Sign in</Button>
      </Link>

      <div className="text-center text-gray-500">or</div>
      <Link href={SignUp}>
        <Button color="secondary">Create Account</Button>
      </Link>
    </Form>
  );
}
