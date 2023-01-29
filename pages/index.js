import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

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
								<h2>Alex Smith</h2>
								<div className="owl-carousel text-rotation">
									<div className="item">
										<div className="sp-subtitle">Web Designer</div>
									</div>

									<div className="item">
										<div className="sp-subtitle">Frontend-developer</div>
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
