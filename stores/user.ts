export const useUserStore = defineStore('user', () => {
  const auth = useAuthStore()

  const { data: authorizedUser, error } = useAsyncData('authorizedUser', async () => {
    await GqlGetAuthenticatedUser()
  }, {
    watch: [computed(() => auth.isLoggedIn)]
  })

  const router = useRouter()
  whenever(error, (error) => {
    auth.logout()
    return router.push('/')
  })

  return { authorizedUser }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
