import React from 'react';
import './not-found.scss';
export const NotFound = (props: { message: string }) => {
    const { message } = props;
    return (
        <div className="not-found">
            <img src="/logo.svg" alt="Not Found" />
            <span>{message}</span>
        </div>
    );
};
