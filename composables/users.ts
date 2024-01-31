export const useUsers = createSharedComposable(async () => {
  const { data: users, refresh } = await useAsyncData(`users`, async () => {
    const { users } = await GqlGetUsers()
    return users
  })

  return { users, refresh }
})
