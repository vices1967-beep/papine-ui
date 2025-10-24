import NextAuth from 'next-auth'

const handler = NextAuth({
  providers: [
    // Aquí irían tus providers (Google, Facebook, etc.)
    // Por ahora lo dejamos vacío para probar
  ],
  callbacks: {
    async session({ session, token }) {
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
})

export { handler as GET, handler as POST }