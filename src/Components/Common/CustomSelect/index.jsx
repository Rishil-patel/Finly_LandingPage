import React from 'react'
import { Select } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Icon from '@mui/material/Icon';
// import { red } from '@mui/material/colors';


const CustomSelect = ({ options, value, onChange, label, name, valueKey, labelKey, defaultValue, error = false, size }) => {

    return (
        <>
            <FormControl
                fullWidth
                error={error}
            >
                <InputLabel  >{label}</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    label={label}
                    name={name}
                    error={error}
                    color='primary'
                    defaultValue={defaultValue}
                    size={size}
                    sx={{
                        "& .MuiSelect-outlined": {
                            display: "flex"

                        }
                    }}

                >
                    {/* {options.map((option) => (
                        <MenuItem key={option[valueKey]} value={option[valueKey]}>
                            {option[labelKey]}
                        </MenuItem>
                    ))} */}

                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value} color='primary' sx={{ display: "flex", alignItems: "center" }} >

                            <ListItemIcon sx={{ display: "inline-flex", justifyContent: "center" }} >
                                <Icon color='primary' >{option.icon}</Icon>
                            </ListItemIcon>


                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText style={{ color: "red" }}  >{error}</FormHelperText>
            </FormControl>
        </>
    )
}

export default CustomSelect;
