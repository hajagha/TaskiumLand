export default function ContentBlockOne() {
	return (
		<section className="content-block section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
						<div className="block-img wow fadeInLeft" data-wow-duration="1.1s">
							<img src="img/frame2.png" alt="" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5">
						<div className="block-contents ms-xl-3 mt-5 mt-lg-0">
							<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h2>Reach clarity and get more done</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
								Taskium helps you keep track of all your day to day tasks and errands in a simple yet powerful app.
							</p>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
								Your data is safely backed up on our cloud servers so they go whenever you go.
							</p>
							<a
								href="https://play.google.com/store/apps/details?id=com.taskium"
								className="theme-btn mt-30 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".6s"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
