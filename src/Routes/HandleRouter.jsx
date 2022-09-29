import { useAuth } from '../Providers/AuthProvider';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const HandleRoute = () => {
  const obj = { signed: false }
  const { signed } = obj;
  return signed ? <PrivateRouter /> : <PublicRouter />;
};
