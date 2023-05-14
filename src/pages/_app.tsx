import type { AppType } from 'next/app';
import { setup } from '@quarks-css/quarks';

const MyApp: AppType = ({ Component, pageProps }) => {
  setup();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
