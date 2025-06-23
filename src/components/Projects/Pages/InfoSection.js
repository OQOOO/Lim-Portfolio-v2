import React from "react";
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

function InfoSection({ title, description }) {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <p style={{ color: theme.tertiary80, fontWeight: "bold" }}>{title}</p>
            <p style={{ color: theme.tertiary80 }}>{description}</p>
            <br />
        </>
    );
}

export default InfoSection;