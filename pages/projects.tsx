import Head from 'next/head';
import Layout from '../components/Layout';
import ProjectItem from '../components/projects/ProjectItem';
import styles from './Projects.module.scss';
import { faChalkboardTeacher, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faTwitch } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
	return (
		<Layout title="Projects">
			<Head>
				<title>Blackjack Software - Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="row">
				<div className="col-xs-12 col-sm-12">
					<div className={styles.portfolioContent}>
						<div className={styles.items}>
							<ProjectItem
								name="RPThreadTracker"
								icon={faLaptopCode}
								url="http://www.rpthreadtracker.com"
								description="A web application established in 2012, offering tools
                      supporting RPers and collaborative writers on Tumblr."
							/>
							<ProjectItem
								name="React Multivalue Text Input"
								icon={faLaptopCode}
								url="https://www.npmjs.com/package/react-multivalue-text-input"
								description="A text input component for React which maintains and
                      displays a collection of entered values as an array of
                      strings."
							/>
							<ProjectItem
								name="Tutoring - ADA Developer Academy"
								icon={faChalkboardTeacher}
								url="https://adadevelopersacademy.org"
								description="Tutoring and TA work helping to educate new developers from groups underrepresented in the tech industry."
							/>
							<ProjectItem
								name="Sunday Afternoon Code Squad"
								icon={faTwitch}
								url="https://www.twitch.tv/blackjack_kent"
								description="Livecoding on software development projects and answering programming questions from audience members."
							/>
							<ProjectItem
								name="Learn Javascript One Byte at a Time"
								icon={faTiktok}
								url="https://www.tiktok.com/@blackjackkent"
								description="Bite-sized Javascript education with cute cat videos for motivation!"
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Portfolio;
