import Link from 'next/link';

import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';

import { Home, SignIn } from '@/constants/routes';

export default function SignUp() {
  return (
    <Form title="New Account">
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm password" />
      <Link href={Home}>
        <Button color="primary">Sign Up</Button>
      </Link>

      <div className="mt-4">
        <p className="text-center text-gray-500 text-sm">
          Already have an account?
          <Link href={SignIn}>
            <span className="ml-2 text-blue-500 hover:text-blue-600">
              Login here
            </span>
          </Link>
        </p>
      </div>
    </Form>
  );
}
