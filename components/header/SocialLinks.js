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
						<i className="fab fa-twitch" />
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						href="http://www.discord.gg/k4gDad5"
						target="_blank"
					>
						<i className="fab fa-discord" />
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						href="http://www.tiktok.com/@blackjackkent"
						target="_blank"
					>
						<i className="fab fa-tiktok" />
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						href="http://www.patreon.com/blackjacksoftware"
						target="_blank"
					>
						<i className="fab fa-patreon" />
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						href="https://github.com/blackjackkent"
						target="_blank"
					>
						<i className="fab fa-github" />
					</a>
				</li>
			</ul>
		</div>
	);
};
export default SocialLinks;
