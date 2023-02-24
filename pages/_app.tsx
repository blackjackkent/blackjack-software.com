import React from 'react';
import '../styles/global.scss';

type AppProps = {
	Component: React.ComponentClass;
	pageProps: object;
};
const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};
export default App;
