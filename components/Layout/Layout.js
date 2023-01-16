import { useRouter } from "next/router";
import Preloader from "../Preloader/Preloader";
import ScrollUp from "../ScrollUp/ScrollUp";
import Footer from "./Footer";
import FooterTwo from "./FooterTwo";
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";

export default function Layout({ children }) {
	const router = useRouter();

	return (
		<>
			{router.pathname != "/privacy_policy" ?  <Navbar /> : null}
			<main>{children}</main>
			{router.pathname === "/index-two" ? <FooterTwo /> : <Footer />}

			<ScrollUp />
			{/* <Preloader /> */}
		</>
	);
}
