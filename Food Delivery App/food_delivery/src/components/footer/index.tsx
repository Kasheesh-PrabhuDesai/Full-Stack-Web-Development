import { Typography, Grid, makeStyles, createStyles } from "@material-ui/core";

const useStyle = makeStyles(theme =>
    createStyles({
        footer: {
            width: "100%",
            backgroundColor: "#f2f3ff"
        },
        footerText: {
            fontSize: 56,
            fontWeight: 600
        }
    })
);

export default function Footer() {
    const classes = useStyle();

    return (
        <Grid container className={classes.footer} justifyContent="center">
            <Typography className={classes.footerText}>Wheels on Meals, Copyright ©2022-2023</Typography>
        </Grid>
    );
}
