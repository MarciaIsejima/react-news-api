import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  textField: {
    display: 'flex',
    margin: theme.spacing.unit,
    width: '50%'
  },
  button: {
    margin: theme.spacing.unit
  }
})

const Form = (props) => (
  <form onSubmit={props.getNews}>
		<Grid container spacing={3} justify="center" alignItems="center">
			<Grid item xs={9}>
				<TextField
					id="searchField"
					name="keywords"
					style={{ margin: 11 }}
					placeholder="Enter your search keyword"
					fullWidth
					margin="normal"
					variant="filled"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
			<Grid item xs={1}>
				<Button
					className={props.classes.button}
					color='primary'
					type='submit'
					variant='contained'
				>
					Search
				</Button>
			</Grid>
		</Grid>
  </form>
)

export default withStyles(styles)(Form)
