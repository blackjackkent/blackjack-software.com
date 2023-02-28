import styles from './ProjectItem.module.scss';

type ProjectItemProps = {
	name: string;
	icon: string;
	url: string;
	description: string;
};

const ProjectItem = ({ name, icon, url, description }: ProjectItemProps) => {
	return (
		<figure className="item">
			<div className={styles.wrapper}>
				<div className={styles.portfolioItemHeader}>
					<i className={`fa ${icon}`} />
					<h4 className={styles.name}>{name}</h4>
					<a href={url}>{url}</a>
				</div>
				<p>{description}</p>
			</div>
		</figure>
	);
};

export default ProjectItem;
