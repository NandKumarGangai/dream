import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '50%',
    },
    fullWidth: {
        width: '100%'
    }
}));

const AddressDetails = ({ formik }) => {
    const classes = useStyles();

    return (
        <div className={classes.form}>
            <CssBaseline />
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <TextField
                        autoComplete='fname'
                        name='addressLine1'
                        variant='outlined'
                        fullWidth
                        id='addressLine1'
                        label='Address Line 1'
                        value={formik.values.addressLine1}
                        onChange={formik.handleChange}
                        error={formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)}
                        helperText={formik.touched.addressLine1 && formik.errors.addressLine1}
                        autoFocus
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        autoComplete='fname'
                        name='addressLine2'
                        variant='outlined'
                        fullWidth
                        id='addressLine2'
                        label='Address Line 2'
                        value={formik.values.addressLine2}
                        onChange={formik.handleChange}
                        error={formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)}
                        helperText={formik.touched.addressLine2 && formik.errors.addressLine2}
                        autoFocus
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        autoComplete='fname'
                        name='addressLine3'
                        variant='outlined'
                        fullWidth
                        id='addressLine3'
                        label='Address Line 3'
                        value={formik.values.addressLine3}
                        onChange={formik.handleChange}
                        error={formik.touched.addressLine3 && Boolean(formik.errors.addressLine3)}
                        helperText={formik.touched.addressLine3 && formik.errors.addressLine3}
                        autoFocus
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        variant='outlined'
                        fullWidth
                        id='city'
                        label='City'
                        name='city'
                        autoComplete='lname'
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        variant='outlined'
                        fullWidth
                        id='district'
                        label='District'
                        name='district'
                        autoComplete='lname'
                        value={formik.values.district}
                        onChange={formik.handleChange}
                        error={formik.touched.district && Boolean(formik.errors.district)}
                        helperText={formik.touched.district && formik.errors.district}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        variant='outlined'
                        fullWidth
                        id='state'
                        label='State'
                        name='state'
                        autoComplete='lname'
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        error={formik.touched.state && Boolean(formik.errors.state)}
                        helperText={formik.touched.state && formik.errors.state}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        variant='outlined'
                        fullWidth
                        id='pincode'
                        label='Pincode'
                        name='pincode'
                        autoComplete='lname'
                        type='number'
                        value={formik.values.pincode}
                        onChange={formik.handleChange}
                        error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                        helperText={formik.touched.pincode && formik.errors.pincode}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressDetails;
