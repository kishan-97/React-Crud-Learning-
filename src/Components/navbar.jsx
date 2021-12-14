import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';

const styles=makeStyles({
    header:{
        background:'black'
    },
    tabs:{
        textDecoration:'none',
        color:'white',
        marginRight:20
    }
});

function Navbar()
{
    const classes=styles();
    return(
        <>
            <AppBar position="static" className={classes.header}>
                <Toolbar >
                    <Link to='/' style={{textDecoration:'none'}}><Typography className={classes.tabs}>Learning</Typography></Link>
                    <Link to='/all' style={{textDecoration:'none'}}><Typography className={classes.tabs}>All Users</Typography></Link>
                    <Link to='/add' style={{textDecoration:'none'}}><Typography className={classes.tabs}>Add Users</Typography></Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;