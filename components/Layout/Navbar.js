import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MenuItems from "./Menu/MenuItems";
import { menuItems } from "./menuItems";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="header-1">
			<div className="container">
				<div className="row align-items-center justify-content-between mt-3">
					<div className="col-lg-2 col-sm-12 col-md-12 col-12 justify-content-center">
						<div className="logo">
							<Link href="/">
								<a>
									<img src="/img/TaskiumWebsite.png" alt="Taskium" />
								</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-end align-items-center">
						<div className="header-right-element text-white">
							<a href="https://web.taskium.app">login</a>
							<Link href="https://play.google.com/store/apps/details?id=com.taskium">
								<a className="theme-btn black">get started</a>
							</Link>
						</div>
					</div>
					
				</div>
			</div>
		</header>
	);
}
