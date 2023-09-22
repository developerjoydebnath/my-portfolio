'use client';

import React, { useContext } from 'react';

const LoadingContext = React.createContext({});

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = React.useState(true);
    const [theme, setTheme] = React.useState(null);

    return (
        <LoadingContext.Provider value={{ loading, setLoading, theme, setTheme }}>{children}</LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
