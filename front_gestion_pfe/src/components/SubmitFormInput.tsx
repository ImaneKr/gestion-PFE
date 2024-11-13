import React, { useState } from 'react';

interface SubmitFormInputProps {
    label: string;
    placeholder?: string;
    type?: string;
    width?: string;
    maxLength?: number; // optional prop to control max length or lines
    options?: string[]; // prop for select input options
    required?: boolean; // prop to check if input is required
}

const SubmitFormInput: React.FC<SubmitFormInputProps> = ({
    label,
    placeholder = '',
    type = 'text',
    width = '100%',
    maxLength,
    options = [],
    required = false,
}) => {
    const [value, setValue] = useState('');

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setValue(event.target.value);
    };

    return (
        <div style={{ width }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>
                {label}{required && ' *'}
            </label>
            {type === 'textarea' ? (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    maxLength={maxLength}
                    required={required}
                    
                    style={{ width: '100%', height: '100px', resize: 'vertical', border: '1px solid #9095A0', padding: '8px', borderRadius: '4px', outline: 'none' }}
                    onFocus={(e) => (e.target.style.border = '1px solid #52ADA2')}
                    onBlur={(e) => (e.target.style.border = '1px solid #9095A0')}
                />
            ) : type === 'select' ? (
                <select
                    value={value}
                    onChange={handleChange}
                    required={required}
                    style={{ width: '100%', border: '1px solid #9095A0', padding: '8px', borderRadius: '4px', outline: 'none' }}
                    onFocus={(e) => (e.target.style.border = '1px solid #52ADA2')}
                    onBlur={(e) => (e.target.style.border = '1px solid #9095A0')}
                >
                    <option value="" disabled>{placeholder || 'Select an option'}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    maxLength={maxLength}
                    required={required}
                    style={{ width: '100%', border: '1px solid ', padding: '4px', borderRadius: '4px', outline: 'none' }}
                    className=' border-2 bg-white p-1 rounded-md pl-2 '
                    onFocus={(e) => (e.target.style.border = '1px solid #52ADA2')}
                    onBlur={(e) => (e.target.style.border = '1px solid #9095A0')}
                />
            )}
        </div>
    );
};

export default SubmitFormInput;
