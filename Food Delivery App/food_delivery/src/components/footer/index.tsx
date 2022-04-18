import { Typography, Grid, makeStyles, createStyles } from "@material-ui/core";

const useStyle = makeStyles(theme =>
    createStyles({
        footer: {
            width: "100%",
            position: "static",
            bottom: 0,
            backgroundColor: "inherit"
        },
        footerText: {
            fontSize: 36,
            fontWeight: 600
        }
    })
);

export default function Footer() {
    const classes = useStyle();

    return (
        <Grid container className={classes.footer} justifyContent="center">
            <footer>
                <Typography className={classes.footerText}>Wheels on Meals, Copyright ©2022-2023</Typography>
            </footer>
        </Grid>
    );
}
