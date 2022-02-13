import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@material-ui/core";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <Typography variant="h4" component="div" style={{ flexGrow: 1 }}>
                        Wheels on Meals
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Menu</Button>
                    <Button color="inherit">Contact Us</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
