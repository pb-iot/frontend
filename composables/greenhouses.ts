export const useGreenhouses = async () => {
  const { data: greenhouses } = await useAsyncData(`greenhouses`, async () => {
    const { greenhouses } = await GqlGetGreenhouses()
    return greenhouses
  })

  return greenhouses
}

export const useGreenhouse = async (id: MaybeRefOrGetter<number>) => {
  const { data: greenhouse } = await useAsyncData(`greenhouse-${resolveUnref(id)}`, async () => {
    const { greenhouse } = await GqlGetGreenhouse({ id: +resolveUnref(id) })
    return greenhouse
  }, { 
    watch: [resolveRef(id)] 
  })

  return greenhouse
}

// NOTE: Delete selected greenhouse
export const deleteGreenhouse = async (greenhouse: Greenhouse) => {
  const greenhouses = await useGreenhouses()

  return useConfirm(() => {
    const greenhouseId = greenhouse.id
    const idx = greenhouses.value.findIndex((greenhouse: Greenhouse) => greenhouse.id === greenhouseId)
    if (idx === -1) return
    greenhouses.value.splice(idx, 1)
  }, {
    message: 'Czy na pewno chcesz usunąć tę szklarnię?',
    list: [greenhouse.name]
  })
}
