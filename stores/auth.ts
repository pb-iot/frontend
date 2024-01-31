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

  const forceRefreshToken = async () => {
    try {
      const { refreshToken: data } = await GqlRefreshToken({
        refreshToken: refreshToken.value
      })

      token.value = data?.token
      refreshToken.value = data?.refreshToken
    } catch (err) {
      console.log(err)
    }
  }

  watchEffect(() => {
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

    
    const tokenExpired = err.gqlErrors.some(e => e.message === 'Signature has expired')
    if (tokenExpired) {
      await forceRefreshToken()
    }
  })

  const isLoggedIn = computed(() => token.value !== '')

  return {
    login,
    logout,
    register,
    isLoggedIn,
    refreshToken: forceRefreshToken
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
