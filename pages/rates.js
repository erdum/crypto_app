import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100vw",
		height: "100vh",
		paddingTop: theme.spacing(10)
	},
	card: {
		backgroundColor: "#404771",
		width: "75vw",
		height: "85vh",
		boxShadow: theme.shadows[6]
	}
}));

export default function Rates() {
	const classes = useStyles();

	return(
		<div className={classes.root}>
		<Card className={classes.card}></Card>
		</div>
	);
}
