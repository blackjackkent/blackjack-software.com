import Image from "next/image";

const HeaderPhoto = () => {
	return (
		<div className="header-content">
			<div className="header-photo">
				<Image src="/images/headshot.png" width={180} height={180} />
			</div>
			<div className="header-titles">
				<h2>Blackjack Software</h2>
			</div>
		</div>
	);
};
export default HeaderPhoto;
