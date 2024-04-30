'use client'

import { ReactNode } from "react";
import {SessionProvider} from 'next-auth/react'

interface NextAuthSessionProviderProps{
    chilfren: ReactNode
}

export default function NextAuthSession({children}: NextAuthSessionProviderProps){
    return <SessionProvider>{children}</SessionProvider>
}