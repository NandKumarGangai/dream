import TextField from '@material-ui/core/TextField';

const TextFieldComponent = ({ formik, id, label }) => {
    return (
        <TextField
            autoComplete=''
            name={id}
            variant='outlined'
            fullWidth
            id={id}
            label={label}
            aria-label={label}
            value={formik.values[id]}
            onChange={formik.handleChange}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={formik.touched[id] && formik.errors[id]}
            autoFocus
        />
    )
}

export default TextFieldComponent;
