export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()

  // When not logged in and not navigates to auth route, redirect to login
  if (!auth.isLoggedIn && !to.meta.layout === 'auth') {
    return navigateTo('/')
  }

  // When logged in and navigates to auth route, redirect to dashboard
  if (auth.isLoggedIn && to.meta.layout === 'auth') {
    return navigateTo('/dashboard')
  }
})
