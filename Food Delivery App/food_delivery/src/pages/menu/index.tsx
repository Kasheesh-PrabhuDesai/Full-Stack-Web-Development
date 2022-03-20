import { Tab, Tabs, Grid, makeStyles, createStyles, Box } from "@material-ui/core";
import React from "react";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import SoupsMenu from "./soups";
import StartersVegMenu from "./starters-veg";

const useStyle = makeStyles(theme =>
    createStyles({
        tabsGrid: {
            width: "100%",
            height: 50,
            justifyContent: "space-around",
            marginLeft: theme.spacing(0.5)
        },
        tabs: {
            fontSize: 14,
            fontWeight: 600,
            border: "1px solid #d8dee9"
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
                <TabList onChange={handleChange} variant="fullWidth" indicatorColor="secondary">
                    <Tab label="Soups" value="1" className={classes.tabs} />
                    <Tab label="Starters Veg" value="2" className={classes.tabs} />
                    <Tab label="Starters Non-Veg" value="3" className={classes.tabs} />
                    <Tab label="Main Course Veg" value="4" className={classes.tabs} />
                    <Tab label="Main Course Non-Veg" value="5" className={classes.tabs} />
                    <Tab label="Sides/Bread" value="6" className={classes.tabs} />
                    <Tab label="Desserts" value="7" className={classes.tabs} />
                    <Tab label="Beverages/Drinks" value="8" className={classes.tabs} />
                </TabList>

                <TabPanel value="1">
                    <SoupsMenu />
                </TabPanel>
                <TabPanel value="2">
                    <StartersVegMenu />
                </TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item One</TabPanel>
                <TabPanel value="5">Item Two</TabPanel>
                <TabPanel value="6">Item Three</TabPanel>
                <TabPanel value="7">Item One</TabPanel>
                <TabPanel value="8">Item Two</TabPanel>
            </TabContext>
        </>
    );
}
