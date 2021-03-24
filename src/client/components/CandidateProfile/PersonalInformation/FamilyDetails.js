import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { TextField, NumericField } from '../../Atoms';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'left',
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
    },
    halfWidth: {
        width: '60%'
    }
}));

const FamilyDetails = ({ formik }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='fathersOccupation'
                        label={`Father's occupation`}
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='mothersOccupation'
                        label={`Mother's Occupation`}
                        formik={formik}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <NumericField
                        id='noOfSisters'
                        label='Number Of Sisters'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <NumericField
                        id='noOfBrothers'
                        label='Number Of Brothers'
                        formik={formik}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default FamilyDetails;

