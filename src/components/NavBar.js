import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div className="header-wrapper">
					<AppBar position="static">
							<Toolbar>
									<Typography variant="h4" align="center">
										React News App
									</Typography>
							</Toolbar>
					</AppBar>
        </div>
    )
}
export default NavBar;