import "./card.css";

function Card() {
	return (
		<div className="container">
			<div className="card-upper-body">
				<div className="information">
					<img src="./images/portrait-img.png" alt="Person" className="info-img" />
					<h2 className="info-title">Rudolf Schneider</h2>
					<p className="info-caption">User interface designer and front-end developer</p>
				</div>
				<ul className="social-media-container">
					<li className="social-media">
						<img src="./images/github-icon.svg" alt="Github" className="social-media-icon" />
					</li>

					<li className="social-media">
						<img src="./images/linkedin-icon.svg" alt="LinkedIn" className="social-media-icon" />
					</li>

					<li className="social-media">
						<img src="./images/instagram-icon.svg" alt="Instagram" className="social-media-icon" />
					</li>

					<li className="social-media">
						<img src="./images/twitter-icon.svg" alt="Twitter" className="social-media-icon" />
					</li>
				</ul>
			</div>
			<div className="card-downer-body">
				<h3 className="skill-title">SKILLS</h3>
				<div className="skill-pack">
					<span className="skills">UI/UX</span>
					<span className="skills">Front End Development</span>
					<span className="skills">HTML</span>
					<span className="skills">CSS</span>
					<span className="skills">JavaScript</span>
					<span className="skills">React</span>
					<span className="skills">Node</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
