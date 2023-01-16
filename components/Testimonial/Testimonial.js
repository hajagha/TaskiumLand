import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
export default function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	};
	return (
		<section className="testimonial-wrapper section-padding fix sagg">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInDown" data-wow-duration="1.2s">
							<h2>A place of trust for millions of people</h2>
						</div>
					</div>
				</div>
				<div className="col-12 col-xl-12">
					<div className="testimonial-carousel-active">
						<Slider {...settings}>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/Avatar1.png" }}
									></div>
									<div className="client-name">
										<h6>Navid M</h6>
									</div>
								</div>
								<div className="feedback">
									“This app is easy to learn and to use, yet so powerful”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/Avatar3.png" }}
									></div>
									<div className="client-name">
										<h6>Jason S</h6>
									</div>
								</div>
								<div className="feedback">
									“Taskium is the perfect to do list app in my opinion. Everything is designed and made how it should be”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/Avatar2.png" }}
									></div>
									<div className="client-name">
										<h6>Sarah B</h6>
									</div>
								</div>
								<div className="feedback">
									“I,ve been looking for a user friendly and complete todo app for a while now. Glad i found Taskium”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/Avatar4.png" }}
									></div>
									<div className="client-name">
										<h6>Marzieh M</h6>
									</div>
								</div>
								<div className="feedback">
									“This app made my life planning way easier. Unique design and flow.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/Avatar5.png" }}
									></div>
									<div className="client-name">
										<h6>Max A</h6>
									</div>
								</div>
								<div className="feedback">
									“I love how the events and todo's are in seperate lists. The categories are flawless as well”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
}
