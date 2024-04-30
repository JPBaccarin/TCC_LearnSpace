import { FormLabel } from '@/components/ui/form';
import { cookies } from 'next/headers';
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
  //aqui ele vc justifica os provedores dos campos do login
  providers: [
    CredentialsProvider({
    name: 'credentials',
    credentials: {
      email: { FormLabel: 'email', type:'text'},
      password: {FormLabel: 'password', type: 'password'}
    },
    //aqui ele ve as credentials se elas batem com o metodo e url
    async authorize(credentials, req) {
      const response = await fetch('http://localhost:3000/login' , {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials?.email,
          password: credentials?.password
        })
      })
      // aqui ele esta vendo se o usuario exite
      const user = await response.json()
      //caso exista retonar o user e o oK
      if (user && response.ok)
        {
          return user
        }
        //Caso nao retorna nada
        return null

    },
    })
  ],
//pagina de login e a pagina root
  pages : {
    signIn: '/'
  }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }