import {createMuiTheme} from '@material-ui/core/styles';
import makeStyles from "@material-ui/styles/makeStyles";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        neutral: Palette['primary'],
    }

    interface PaletteOptions {
        neutral: PaletteOptions['primary'],
    }
}

export const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '1.5rem',
            fontWeight: 600
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 400
        },
        h3: {
            fontSize: '1.125rem'
        },
        body1: {
            fontSize: '0.875rem'
        },
        body2: {
            fontSize: '0.75rem'
        }
    },
    palette: {
        primary: {
            main: '#BCDDBE'
        },
        secondary: {
            main: '#FFFCD6'
        },
        neutral: {
            main: '#E4DFD7'
        },
        text: {
            secondary: '#062F5B'
        }
    }
});

export const useStyles = makeStyles({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        color: theme.palette.primary.main,
        padding: '0px',
        textAlign: 'center'
    },
    body: {
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
        backgroundImage: 'url(/img/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '400px',
        position: 'relative',
        top: 0,
        left: 0,
        right: 0
    },
    fullHeight: {
        height: '100%'
    },
    box: {
        boxSizing: 'border-box',
        alignItems: 'center',
        maxWidth: '80%',
        margin: '0 auto 10px',
        padding: '60px 20px'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '4px',
        maxWidth: '90%',
        margin: '10px auto',
        position: 'relative',
        padding: '34px',
        color: '#444',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    item: {
        padding: '5px',
        boxSizing: 'border-box',
        flex: '1',
        textAlign: 'center'
    },
    field: {
        height: '56px',
        borderRadius: '4px',
        border: 'none',
        padding: '0 10px',
        boxSizing: 'border-box',
        width: '100%'
    },
    dropdownContent: {
        position: 'absolute',
        zIndex: 1,
        boxSizing: 'border-box',
        padding: '0 20px',
        backgroundColor: '#fff',
        border: '0.1px solid rgba(0,0,0,0.5)'
    },
    listButton: {
        border: 'none',
        background: 'white',
        padding: '10px'
    }
})

