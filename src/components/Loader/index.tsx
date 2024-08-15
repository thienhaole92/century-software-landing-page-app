import { Suspense } from 'react';
import SuspenseLoader from '../SuspenseLoader';

const Loader =
  (Component: React.ExoticComponent) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );
export default Loader;
