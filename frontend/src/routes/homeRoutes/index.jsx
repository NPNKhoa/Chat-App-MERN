import { v4 as uuidv4 } from 'uuid';
import { HomePage } from '../../pages';

export default [
  {
    id: `auth-${uuidv4()}`,
    path: `/`,
    element: <HomePage />,
  },
];
