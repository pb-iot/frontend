export const useUserStore = defineStore('user', () => {
  const authorizedUser = ref()

  const router = useRouter()
  const auth = useAuthStore()
  watchEffect(async () => {
    if (!auth.isLoggedIn) {
      authorizedUser.value = undefined
      return
    }

    const { authenticatedUser } = await GqlGetAuthenticatedUser().catch(async (error) => {
      console.log(error)
      auth.logout()
      await router.push('/')
      return undefined
    })

    console.log(authenticatedUser)
    authorizedUser.value = authenticatedUser
  })

  return { authorizedUser }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
