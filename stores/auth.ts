export const useAuthStore = defineStore('auth', () => {
  const token = useLocalStorage('auth:token', '')
  const refreshToken = useLocalStorage('auth:refreshToken', '')

  const login = async (credentials) => {
    const { tokenAuth: data } = await GqlLogin(credentials)
    token.value = data.token
    refreshToken.value = data.refreshToken
  }

  const register = async (data) => {
    await GqlRegister(data)
    await login(data)
  }

  const logout = () => {
    token.value = ''
  }

  watchEffect(() => {
    if (token.value === '') return
    useGqlToken(token.value)
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
