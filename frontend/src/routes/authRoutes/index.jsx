import { v4 as uuidv4 } from 'uuid';
import { LoginPage, SignUpPage, } from '../../pages';

export default [
  {
    id: `auth-${uuidv4()}`,
    path: `/login`,
    element: <LoginPage />,
  },
  {
    id: `auth-${uuidv4()}`,
    path: `/signup`,
    element: <SignUpPage />,
  },
];