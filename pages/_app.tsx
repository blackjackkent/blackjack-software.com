import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles';
import '../styles/global.scss';

config.autoAddCss = false;

type AppProps = {
	Component: React.ComponentClass;
	pageProps: object;
};
const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};
export default App;
