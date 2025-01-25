import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }


export const Input: React.FC<InputProps> = ({ ...props }) => {
    return (
        <input {...props} className={`w-full p-4 placeholder:text-gray-600  border 
                            border-gray-400 text-gray-900 text-sm  ${props.className}`}>
        </input>
    )
}
