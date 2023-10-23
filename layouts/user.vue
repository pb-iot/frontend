<script setup>
const isOpen = ref(true)
const links = [{
    label: 'Moje szklarnie',
    icon: 'i-heroicons-map-pin-solid',
    to: '/getting-started/installation'
}, {
    label: 'Moje lokalizacje',
    //placeholder bo nie wiem skad wziac ikonke szklarni 
    icon: 'i-heroicons-building-storefront-solid',
    to: '/navigation/vertical-navigation'
}, {
    label: 'Mój profil',
    icon: 'i-heroicons-user-circle-solid',
    to: '/'
}]
</script>
<template>
<template>
    <div>
        <UButton class="my-1" color="gray" size="xl" icon="i-heroicons-arrow-right-20-solid" @click="isOpen = true"
            variant="ghost" />
        <USlideover v-model="isOpen" prevent-close side="left" :overlay="false">
            <UCard class="flex flex-col flex-1"
                :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-end">
                        <UButton color="gray" size="xl" variant="ghost" icon="i-heroicons-arrow-left-20-solid" class="-my-4"
                            @click="isOpen = false" />
                    </div>
                </template>
                <div class="border-b border-gray-500 -mt-4 -mx-4">
                    <UVerticalNavigation :links="links"/>
                </div>

                <div class="mt-1 text-gray-700 font-medium px-3 py-1.5">
                    <p>
                        <UIcon name="i-heroicons-list-bullet" class="mr-1"/>
                        Lista szklarni
                    </p>
                    <UButton class="-ml-3" icon="i-heroicons-plus-circle-solid"
                    variant="ghost">
                        Dodaj szklarnię
                    </UButton>
                </div>

            </UCard>
        </USlideover>
</div></template>

<UAvatar class="object-right-top"
  src="https://avatars.githubusercontent.com/u/739984?v=4"
  alt="Avatar"
/>
</template>