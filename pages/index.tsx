import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from './Home.module.scss';

const Home = () => {
	return (
		<Layout>
			<Head>
				<title>Blackjack Software</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12">
					<div className={styles.titleBlock}>
						<Image
							alt="logo"
							className={styles.logo}
							src="/images/logo.png"
							width={500}
							height={500}
						/>
						<h2>Rosalind Wills</h2>
						<div>
							<div className="item">
								<div className={styles.spSubtitle}>Web App Developer</div>
							</div>

							<div className="item">
								<div className={styles.spSubtitle}>Tech Speaker and Educator</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Home;
