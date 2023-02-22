import React from 'react';
import './input.scss';

interface Props {
    placeholder?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
    const { placeholder, onChange, value } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };

    return (
        <input
            className="input"
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
        />
    );
};
