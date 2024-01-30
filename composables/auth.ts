export const useAuthenticatedUser = createSharedComposable(async () => {
  const auth = useAuthStore()

  const { data: authorizedUser, error, refresh } = await useAsyncData('authorizedUser', () => GqlGetAuthenticatedUser(), {
    transform: (data) => data?.authenticatedUser
  })

  watch(() => auth.isLoggedIn, (isLoggedIn) => {
    if (isLoggedIn) return refresh()
  })

  const router = useRouter()
  const forceLogout = () => {
    auth.logout()
    return router.push('/')
  }

  whenever(error, (error) => {
    console.log(error)
    return forceLogout()
  })

  watch(authorizedUser, (user) => {
    if (user) return
    return forceLogout()
  })

  return extendRef(authorizedUser, {
    refresh
  })
})
