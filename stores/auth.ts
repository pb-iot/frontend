export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const user = ref<User | null>(null)

  const login = async (username: string, password: string) => {
    const data = await $fetchAPI<{ token: string, user: User }>('/login', {
      method: 'POST',
      body: { username, password }
    })

    token.value = data.token
    user.value = data.user
  }

  const register = async (username: string, password: string) => {
    const data = await $fetchAPI<{ token: string, user: User }>('/register', {
      method: 'POST',
      body: { username, password }
    })

    token.value = data.token
    user.value = data.user
  }

  const logout = () => {
    token.value = ''
    user.value = null
  }

  return {
    login,
    logout,
    register,
    user
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
