'use client';

import React, { useContext } from 'react';

const LoadingContext = React.createContext({});

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = React.useState(true);

    return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>;
};

export const useLoading = () => useContext(LoadingContext);
