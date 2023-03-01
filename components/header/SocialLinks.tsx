import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDiscord,
	faGithub,
	faPatreon,
	faTiktok,
	faTwitch
} from '@fortawesome/free-brands-svg-icons';
import styles from './SocialLinks.module.scss';

const SocialLinks = () => {
	return (
		<div className={styles.socialLinks}>
			<ul>
				<li>
					<a
						rel="noopener noreferrer"
						href="http://www.twitch.tv/blackjack_kent"
						target="_blank"
					>
						<FontAwesomeIcon icon={faTwitch} />
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						href="http://www.discord.gg/k4gDad5"
						target="_blank"
					>
						<FontAwesomeIcon icon={faDiscord} />
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						href="http://www.tiktok.com/@blackjackkent"
						target="_blank"
					>
						<FontAwesomeIcon icon={faTiktok} />
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						href="http://www.patreon.com/blackjacksoftware"
						target="_blank"
					>
						<FontAwesomeIcon icon={faPatreon} />
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						href="https://github.com/blackjackkent"
						target="_blank"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>
			</ul>
		</div>
	);
};
export default SocialLinks;
