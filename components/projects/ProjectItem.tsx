import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './ProjectItem.module.scss';

type ProjectItemProps = {
	name: string;
	icon: IconProp;
	url: string;
	description: string;
};

const ProjectItem = ({ name, icon, url, description }: ProjectItemProps) => {
	return (
		<figure className="item">
			<div className={styles.wrapper}>
				<div className={styles.portfolioItemHeader}>
					<FontAwesomeIcon icon={icon} />
					<h4 className={styles.name}>{name}</h4>
					<a href={url}>{url}</a>
				</div>
				<p>{description}</p>
			</div>
		</figure>
	);
};

export default ProjectItem;
