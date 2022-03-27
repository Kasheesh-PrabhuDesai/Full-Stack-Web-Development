import { Card, makeStyles, createStyles, CardMedia, CardContent, Typography, Grid, Button } from "@material-ui/core";

const useStyle = makeStyles(theme =>
    createStyles({
        soupsCard: {
            width: 400,
            borderRadius: 6
        },
        soupsMedia: {
            width: 400,
            height: 250
        },
        soupsHeaderText: {
            fontSize: 24,
            fontWeight: 600
        },
        textGrid: {
            padding: 10
        }
    })
);

export default function MainCourseVegMenu() {
    const classes = useStyle();

    return (
        <>
            <Grid container justifyContent={"space-around"}>
                <Card className={classes.soupsCard}>
                    <CardMedia image="main-course-veg/veg-biryani.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Veg Biryani</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 320</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="main-course-veg/paneer-butter-masala.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Paneer Butter Masala</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 280</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="main-course-veg/paneer-tikka-masala.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Paneer Tikka Masala</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 330</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid container justifyContent={"space-around"} style={{ marginTop: 30 }}>
                <Card className={classes.soupsCard}>
                    <CardMedia image="main-course-veg/gobi-manchurian.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Gobi Manchurian</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 220</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="main-course-veg/mix-veg-sabzi.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Mix Veg Sabzi</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 260</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="main-course-veg/veg-kolhapuri.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Veg Kolhapuri</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 290</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}
