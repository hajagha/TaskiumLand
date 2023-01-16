import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link href="/">
										<a style={{maxWidth : 180}} className="footer-logo d-block">
											<img src="img/TaskiumWebsite.png" alt="xmoze" />
										</a>
									</Link>
									<p>
										Taskium is a to do list and task manager app that helps people organize their life and get more done.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-8 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".2s">
								<div className="widget-title">
									<h5 >Resources</h5>
								</div>
								<ul>
									<li>
										<Link href="https://www.Taskium.app/privacy_policy">
											<a>Privacy Policy</a>
										</Link>
									</li>
									<li>
										<Link href="https://www.Taskium.app/privacy_policy/eula">
											<a>License Agreement</a>
										</Link>
									</li>
									
								</ul>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 2022{" "}
								Powered by
								<Link href="https://pixiumlabs.com">
									<a target={"_blank"}> Pixiumlabs </a>
								</Link>
								All Rights Reserved.
							</p>
						</div>
						{/* <div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<Link href="#">
								<a>
									<FaFacebookF />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaTwitter />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaInstagram />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaLinkedinIn />
								</a>
							</Link>
						</div> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
