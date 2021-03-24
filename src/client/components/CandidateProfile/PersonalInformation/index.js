import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

import { Accordion } from '../../Atoms';
import BasicDetails from './BasicDetails';
import PersonalLifyStyleDetails from './LifyStyles';
import EducationAndCareer from './EducationAndCareer';
import ReligiousSocialAstroBackground from './ReligiousSocialAstroBackground';
import FamilyDetails from './FamilyDetails';

import { validationSchema } from './validateForm';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
    },
    saveBtn: {
        width: '40%',
        marginTop: '1rem'
    },
    mb1: {
        marginBottom: "0.1rem"
    }
}));


const PersonalInformation = ({ initialValues, onSubmit, history, userInfo }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [profileUpdated, setProfileUpdated] = useState(false);

    const onSubmitHandle = async (values, { resetForm }) => {
        if (formik.isValid) {
            console.log('ProfileComponent: ', JSON.stringify(values, null, 2), userInfo);

            const success = await onSubmit({ userInfo, profileData: values }, history, resetForm, dispatch);
            console.log('success: ', success);
            setProfileUpdated(success);
        }
        return;
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: onSubmitHandle,
        enableReinitialize: true
    });

    console.log('formik: ', formik);
    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container className="flex-center" spacing={1}>
                {
                    !formik.isValid &&
                    (
                        <Grid item md={8} xs={12}>
                            <Alert severity="error" className={classes.mb1}>
                                {'Please enter all the fields which are mandatory and check you have entered valid data.'}
                            </Alert>
                        </Grid>
                    )
                }
                {
                    profileUpdated &&
                    (
                        <Grid item md={8} xs={12}>
                            <Alert severity="success" className={classes.mb1}>
                                {'Data saved successfully!!'}
                            </Alert>
                        </Grid>
                    )
                }

                <Accordion
                    id="basicDetails"
                    label="Basic Details"
                    classes={classes}
                >
                    <BasicDetails formik={formik} />
                </Accordion>
                <Accordion
                    id="personalDetails"
                    label="Personal Details"
                    classes={classes}
                >
                    <PersonalLifyStyleDetails formik={formik} />
                </Accordion>
                <Accordion
                    id="religiousSocialAstroBackgroundDetails"
                    label="Religious Social Astro Background Details"
                    classes={classes}
                >
                    <ReligiousSocialAstroBackground formik={formik} />
                </Accordion>
                <Accordion
                    id="educationAndCareer"
                    label="Education And Career Details"
                    classes={classes}
                >
                    <EducationAndCareer formik={formik} />
                </Accordion>
                <Accordion
                    id="familyDetails"
                    label="Family Details"
                    classes={classes}
                >
                    <FamilyDetails formik={formik} />
                </Accordion>

                <Grid item md={8} xs={12} className="flex-center">
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.saveBtn}
                    >
                        {'Save Profile'}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default PersonalInformation;