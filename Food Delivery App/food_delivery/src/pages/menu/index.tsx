import { Tab, Tabs, Grid, makeStyles, createStyles, Box } from "@material-ui/core";
import React from "react";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import SoupsMenu from "./soups";
import StartersVegMenu from "./starters-veg";
import StartersNonVegMenu from "./starters-non-veg";
import MainCourseVegMenu from "./main-course-veg";
import MainCourseNonVegMenu from "./main-course-non-veg";
import SidesMenu from "./sides-bread";
import DessertsMenu from "./desserts";
import BeveragesMenu from "./beverages";

const useStyle = makeStyles(theme =>
    createStyles({
        tabsGrid: {
            height: 50,
            justifyContent: "center"
        },
        tabs: {
            fontSize: 16,
            fontWeight: 600,
            border: "2px solid #d8dee9"
        },
        indicator: {
            background: "purple"
        },
        root: {
            backgroundColor: "blue"
        },
        buttonGrid: {
            marginTop: theme.spacing(5),
            marginLeft: theme.spacing(3),
            width: "95%",
            justifyContent: "space-between"
        },
        descriptionCardGrid: {
            marginLeft: theme.spacing(4),
            marginTop: theme.spacing(-29.5),
            paddingBottom: theme.spacing(7)
        },
        descriptionCard: {
            width: 400,
            height: 160,
            background: "linear-gradient(90deg, #172B4D 0%, #1A174D 100%)",
            boxShadow: "0px 0px 32px rgba(136, 152, 170, 0.15)",
            borderRadius: "6px",
            marginLeft: theme.spacing(1),
            marginTop: theme.spacing(-8.5)
        },
        descriptionCardRealEstateNameInput: {
            height: 40,
            marginTop: theme.spacing(-2),
            borderRadius: "4px"
        },
        descriptionCardRealEstateDescriptionInput: {
            height: 80,
            borderRadius: "4px",
            marginTop: theme.spacing(2)
        }
    })
);

export default function MenuTab() {
    const [value, setValue] = React.useState("1");

    const classes = useStyle();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <>
            <TabContext value={value}>
                <Grid container className={classes.tabsGrid}>
                    <TabList onChange={handleChange} indicatorColor="secondary">
                        <Tab label="Soups" value="1" className={classes.tabs} />
                        <Tab label="Starters Veg" value="2" className={classes.tabs} />
                        <Tab label="Starters Non-Veg" value="3" className={classes.tabs} />
                        <Tab label="Main Course Veg" value="4" className={classes.tabs} />
                        <Tab label="Main Course Non-Veg" value="5" className={classes.tabs} />
                        <Tab label="Sides/Bread" value="6" className={classes.tabs} />
                        <Tab label="Desserts" value="7" className={classes.tabs} />
                        <Tab label="Beverages/Drinks" value="8" className={classes.tabs} />
                    </TabList>
                </Grid>

                <TabPanel value="1">
                    <SoupsMenu />
                </TabPanel>
                <TabPanel value="2">
                    <StartersVegMenu />
                </TabPanel>
                <TabPanel value="3">
                    <StartersNonVegMenu />
                </TabPanel>
                <TabPanel value="4">
                    <MainCourseVegMenu />
                </TabPanel>
                <TabPanel value="5">
                    <MainCourseNonVegMenu />
                </TabPanel>
                <TabPanel value="6">
                    <SidesMenu />
                </TabPanel>
                <TabPanel value="7">
                    <DessertsMenu />
                </TabPanel>
                <TabPanel value="8">
                    <BeveragesMenu />
                </TabPanel>
            </TabContext>
        </>
    );
}
