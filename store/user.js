export const state = () => ({
    actcomp: 'profileuser'
})
export const getters = {
    actcomp(state) {
        return state.actcomp
    }
}
export const mutations = {
    setcomponent(state, param) {
        state.actcomp = param;
    }
}
export const actions = {

}