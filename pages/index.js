import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Blackjack Software</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section data-id="home" className="content-section start-page">
				<div className="section-content vcentered">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-12">
							<div className="title-block">
								<Image
									className={styles.logo}
									src={"/images/logo.png"}
									width={500}
									height={500}
								/>
								<h2>Rosalind Wills</h2>
								<div className="text-rotation">
									<div className="item">
										<div className="sp-subtitle">Web App Developer</div>
									</div>

									<div className="item">
										<div className="sp-subtitle">Tech Speaker and Educator</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
