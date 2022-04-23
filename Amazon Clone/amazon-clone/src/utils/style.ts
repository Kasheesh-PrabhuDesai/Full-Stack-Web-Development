import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    navBar: {
      backgroundColor: "#203040",
      "& a": {
        color: "#ffffff",
        marginLeft: theme.spacing(10),
      },
    },
    main: {
      minHeight: "80vh",
    },
    footer: {
      textAlign: "center",
    },
    navBarText: {
      fontSize: 24,
      fontWeight: 600,
    },
  })
);

export default useStyles;
