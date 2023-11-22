import NextAuth, { AuthOptions } from 'next-auth'
import NaverProvider from 'next-auth/providers/naver'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
      authorization: { params: { scope: 'openid email profile' } },
      idToken: true,
      checks: ['pkce', 'state'],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, //하루
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // 로그인 시 사용자 정보와 토큰을 JWT에 추가
      if (account && user) {
        token.accessToken = account.access_token
        token.user = user
        token.id_token = account.id_token
        token.user.image = user.image // 사용자 이미지 정보 추가
      }
      return token
    },
    async session({ session, token }) {
      // 세션 정보에 JWT 토큰의 정보를 추가
      if (token) {
        session.accessToken = token.accessToken
        session.user = token.user
        session.id_token = token.id_token
        session.user.image = token.user.image
      }
      return session
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
