"use client";

import React from 'react'
import { TRPCReactProvider } from "~/trpc/react";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserProvider>
            <TRPCReactProvider>
                {children}
            </TRPCReactProvider>
        </UserProvider>
    )
}

export default Providers