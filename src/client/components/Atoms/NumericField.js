import TextField from '@material-ui/core/TextField';

const NumericField = ({ formik, id, label, ...rest }) => {
    return (
        <TextField
            variant='outlined'
            fullWidth
            name={id}
            label={label}
            type='tel'
            id={id}
            autoComplete=''
            value={formik.values[id]}
            onChange={formik.handleChange}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={formik.touched[id] && formik.errors[id]}
        />
    )
}

export default NumericField;
