import React from "react";
import Navbar from "./navbar";
import BotMenu from "./botMenu";
import { NavStateWrapper } from "./navState";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundImage: 'url("/bg.jpg")',
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		minHeight: "100vh",
		minWidth: "100vw",
		position: "fixed",
		top: 0,
	},
	main: {
		position: "absolute",
		top: 0,
		minWidth: "100vw",
		minHeight: "100vh",
	},
}));

export default function Layout({ children }) {
	const router = useRouter();
	const classes = useStyles();
	return (
		<>
			<div
				className={classes.root}
				style={router.pathname != "/" ? { filter: "blur(8px)" } : {}}
			></div>
			<div className={classes.main}>
				<NavStateWrapper>
					<Navbar />
					<BotMenu />
				</NavStateWrapper>
				{children}
			</div>
		</>
	);
}
