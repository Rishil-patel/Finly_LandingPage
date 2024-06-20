import React from 'react'

import { TextField, InputAdornment } from '@mui/material';


const CustomInput = ({
    variant = "outlined",
    label,
    onChange,
    size = 'small',
    type = "text",
    disabled,
    placeholder,
    fullWidth = true,
    required = false,
    helperText,
    value,
    name,
    inputRef,
    onClick,
    iconStart,
    iconEnd,
    InputProps,
    color,
    sx,
    ...props




}) => {
    return (
        <>
            <TextField
            color={color}
                sx={sx}
                name={name}
                value={value}
                required={required}
                fullWidth={fullWidth}
                label={label}
                variant={variant}
                placeholder={placeholder}
                size={size}
                type={type}
                onClick={onClick}
                onChange={onChange}
                disabled={disabled}
                helperText={helperText}
                error={helperText}
                inputRef={inputRef}
            
                {...props}
                InputProps={{
                    ...InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment position="start">{iconStart}</InputAdornment>
                    ) : null,
                    endAdornment: iconEnd ? (
                        <InputAdornment position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
            />
        </>
    )
}

export default CustomInput;
