import Head from "next/head";
import BlogContent from "../components/DefaultHome/BlogContent";
import CallToAction from "../components/DefaultHome/CallToAction";
import ContentBlockOne from "../components/DefaultHome/ContentBlockOne";
import ContentBlockTwo from "../components/DefaultHome/ContentBlockTwo";
import Hero from "../components/Hero/Hero";
import PopularCryptoCurrencies from "../components/DefaultHome/PopularCryptoCurrencies";
import FeaturesOne from "../components/Features/FeaturesOne";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
	return (
		<>
			<Head>
				<title>Taskium</title>
			</Head>
			<Hero />
			<FeaturesOne />
			<ContentBlockOne />
			{/* <ContentBlockTwo /> */}
			<Testimonial />
			<CallToAction />
		</>
	);
}
