export const useAuthStore = defineStore('auth', () => {
  const token = useLocalStorage('auth:token', '')
  const refreshToken = useLocalStorage('auth:refreshToken', '')

  interface Credentials {
    email: string
    password: string
  }

  const login = async (credentials: Credentials) => {
    const { tokenAuth: data } = await GqlLogin(credentials)
    token.value = data?.token
    refreshToken.value = data?.refreshToken
  }

  const register = async (data) => {
    await GqlRegister(data)
    await login(data)
  }

  const logout = () => {
    token.value = ''
    refreshToken.value = ''
  }

  watchEffect(() => {
    if (!token.value) return

    useGqlToken({
      token: token.value,
      config: {
        type: 'JWT',
        name: 'Authorization'
      }
    })
  })

  useGqlError(async (err) => {
    if (!import.meta.env.PROD) {
      for (const gqlError of err.gqlErrors) {
        console.error('[nuxt-graphql-client] [GraphQL error]', {
          client: err.client,
          statusCode: err.statusCode,
          operationType: err.operationType,
          operationName: err.operationName,
          gqlError
        })
      }
    }

    
    const tokenExpired = err.gqlErrors.some(e => e.message.includes('id-token-expired'))
    const tokenRevoked = err.gqlErrors.some(e => e.message.includes('id-token-revoked'))


    console.log(tokenExpired, tokenRevoked)

    if (tokenExpired || tokenRevoked) {
      const { refreshToken: data } = await GqlRefreshToken({
        refreshToken: refreshToken.value
      })

      token.value = data?.token
      refreshToken.value = data?.refreshToken
    }
  })

  const isLoggedIn = computed(() => token.value !== '')

  return {
    login,
    logout,
    register,
    isLoggedIn
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
