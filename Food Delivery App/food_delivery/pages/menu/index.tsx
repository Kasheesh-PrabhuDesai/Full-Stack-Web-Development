import { Grid, Box, makeStyles, createStyles } from "@material-ui/core";
import NavBar from "../../src/components/navbar";
import MenuTab from "../../src/pages/menu";

const useStyle = makeStyles(theme =>
    createStyles({
        container: {
            background: "#f2f3ff",
            margin: 0,
            padding: 0
        },
        menuTabGrid: {
            marginTop: theme.spacing(10)
        }
    })
);

export default function MenuPage() {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Grid className={classes.menuTabGrid}>
                <MenuTab />
            </Grid>
        </Box>
    );
}
