import React from "react";

export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-contents">
								<h1>Calm your mind and stay organized</h1>
								<p>
									Keep track of all your tasks, events and thoughts with Taskium. A modern to do list and calender for mobile and desktop
								</p>
								{/* <a href="#" className="app-download-btn">
									<img src="img/apple.png" alt="" />
								</a> */}
								
								{/* <div className="tri-arrow">
									<img src="img/icons/tir-shape.svg" alt="" />
								</div> */}
							</div>
						</div>
						<div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-mobile mt-5 mt-xl-0">
								<img  src="img/Frame-1.png" alt="taskium app" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
