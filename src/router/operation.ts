const routerOperation = (v: string) => {
    return {
        path: '/login',
        name: `${v}`,
        component: () => import('../views/LoginView.vue')
    }
}

export default routerOperation