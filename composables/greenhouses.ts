export const useGreenhouses = createGlobalState(async () => {
  // TODO: use with backend
  // const { data: greenhouses } = await useFetch('/api/greenhouses')

  const greenhouses = ref<Greenhouse[]>([])

  // const data = await GqlGetGreenhouses()
  // console.log(data)


  return { greenhouses }
})

// Note: Delete selected greenhouse

export const deleteGreenhouse = async (greenhouse: Greenhouse) => {
  const { greenhouses } = await useGreenhouses()

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
