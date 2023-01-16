import { AiOutlineBarChart } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
export default function FeaturesOne() {
	return (
		<section className="our-best-features-wrapper section-padding">
			<div className="container">
				<div className="col-xl-8 offset-xl-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h2>Supercharge your day with:</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon1">
								<img className="sag"  src="img/check.png"/>
							</div>
							<h3>Tasks and To Do's</h3>
							<p>Add your tasks in just a few seconds and free your mind</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon2">
							<img className="sag"  src="img/notif.png"/>
							</div>
							<h3>Custom Alerts</h3>
							<p>Get a notification for each tasks whenever you want</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon3">
								<img className="sag"  src="img/cal.png"/>
							</div>
							<h3>List and Calender view</h3>
							<p>Keep tasks with, and without due dates in seperate lists</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
