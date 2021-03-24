import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { TextField, NumericField, SelectField } from '../../Atoms';
import { HighestEducation, JobType } from '../../../../shared';

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

const EducationalAndCareer = ({ formik }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <SelectField
                        label='Highest Education'
                        id='highestEducation'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={HighestEducation}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='educationDetails'
                        label='Education Details'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='occupation'
                        label='Occupation'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='company'
                        label='Company'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectField
                        label='Company/Job Type'
                        id='companyType'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={JobType}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <NumericField
                        id='annualIncome'
                        label='Annual Income (INR)'
                        formik={formik}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default EducationalAndCareer;

