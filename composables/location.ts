export const useLocations = createSharedComposable(async () => {
  const { data: locations, refresh } = await useAsyncData(`locations`, async () => {
    const { locations } = await GqlGetLocations()

    return locations?.map(loc => {
      if (loc == null) return null

      return {
        id: loc.id,
        name: loc.name,
        lat: +loc.coordinates.split(',')[0],
        lng: +loc.coordinates.split(',')[1],
      }
    })
    .filter(loc => loc != null)
    ?? []
  })

  return { locations, refresh }
})
