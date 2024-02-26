import { LHALabsThemeProvider } from '@lha-labs/theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <LHALabsThemeProvider defaultLang="en">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Head>
          <title>{"Let's Help Association - LHA"}</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </LocalizationProvider>
    </LHALabsThemeProvider>
  );
}

export default CustomApp;
