import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

import { validationSchema } from './validateForm';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    fullWidth: {
        width: '100%'
    }
}));

export default function SignUp({ initialValues, onSubmit }) {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        {' Sign up'}
                    </Typography>
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete='fname'
                                    name='firstName'
                                    variant='outlined'
                                    fullWidth
                                    id='firstName'
                                    label='First Name'
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    id='lastName'
                                    label='Last Name'
                                    name='lastName'
                                    autoComplete='lname'
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <FormControl variant="outlined" className={classes.fullWidth} error={formik.touched.gender && Boolean(formik.errors.gender)}>
                                    <InputLabel id="profile-for-label">{'Profile For'}</InputLabel>
                                    <Select
                                        labelId="profileFor"
                                        id="profileFor"
                                        name="profileFor"
                                        label="Profile for"
                                        autoWidth={false}
                                        displayEmpty={false}
                                        className={classes.fullWidth}
                                        value={formik.values.profileFor}
                                        onChange={e => formik.handleChange(e)}
                                    >
                                        <MenuItem value="">{'Select'}</MenuItem>
                                        <MenuItem value={'M'}>{'Self'}</MenuItem>
                                        <MenuItem value={'B'}>{'Brother'}</MenuItem>
                                        <MenuItem value={'S'}>{'Sister'}</MenuItem>
                                        <MenuItem value={'O'}>{'Son'}</MenuItem>
                                        <MenuItem value={'D'}>{'Daughter'}</MenuItem>
                                        <MenuItem value={'R'}>{'Relative'}</MenuItem>
                                        <MenuItem value={'F'}>{'Friend'}</MenuItem>
                                    </Select>
                                    {
                                        formik.touched.profileFor && Boolean(formik.errors.profileFor)
                                            ? <FormHelperText>{formik.touched.profileFor && formik.errors.profileFor}</FormHelperText>
                                            : null
                                    }
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    id='name'
                                    label='Full name'
                                    name='name'
                                    autoComplete='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" className={classes.fullWidth} error={formik.touched.gender && Boolean(formik.errors.gender)}>
                                    <InputLabel id="gender-label">{'Gender'}</InputLabel>
                                    <Select
                                        labelId="gender"
                                        id="gender"
                                        name="gender"
                                        label="Gender"
                                        autoWidth={false}
                                        displayEmpty={false}
                                        className={classes.fullWidth}
                                        value={formik.values.gender}
                                        onChange={e => formik.handleChange(e)}
                                    >
                                        <MenuItem value="">{'Select'}</MenuItem>
                                        <MenuItem value={'M'}>{'Male'}</MenuItem>
                                        <MenuItem value={'F'}>{'Female'}</MenuItem>
                                        <MenuItem value={'O'}>{'Other'}</MenuItem>
                                    </Select>
                                    {
                                        formik.touched.gender && Boolean(formik.errors.gender)
                                            ? <FormHelperText>{formik.touched.gender && formik.errors.gender}</FormHelperText>
                                            : null
                                    }
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} style={{margin: "0"}}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    name='religion'
                                    label='Religion'
                                    id='religion'
                                    autoComplete='Religion'
                                    value={formik.values.religion}
                                    onChange={formik.handleChange}
                                    error={formik.touched.religion && Boolean(formik.errors.religion)}
                                    helperText={formik.touched.religion && formik.errors.religion}
                                />
                            </Grid>
                            <Grid item xs={12} style={{margin: "0"}}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    name='mobileNumber'
                                    label='Mobile number'
                                    type='tel'
                                    id='mobileNumber'
                                    autoComplete='Mobile number'
                                    value={formik.values.mobileNumber}
                                    onChange={formik.handleChange}
                                    error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                                    helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    id='email'
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    autoComplete='current-password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    name='confirmPassword'
                                    label='Verify Password'
                                    type='password'
                                    id='confirmPassword'
                                    autoComplete='current-password'
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            {'Sign Up'}
                        </Button>
                        <Grid container justify='flex-end'>
                            <Grid item>
                                <RouterLink to='/login'>
                                    <Link href='#' variant='body2'>
                                        {'Already have an account? Sign in'}
                                    </Link>
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </form>
    );
}
