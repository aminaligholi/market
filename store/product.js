export const state = () => ({
    allproduct: [
        { id: '1', name: 'قالی', category: 'صنایع دستی', price: '1000000', number: '50', seller: 'خسروی', state: 'یزد', pic: [, , ] },
        { id: '2', name: 'قالی', category: 'صنایع دستی', price: '1000000', number: '50', seller: 'خسروی', state: 'یزد', pic: [, , ] },
        { id: '3', name: 'قالی', category: 'صنایع دستی', price: '1000000', number: '50', seller: 'خسروی', state: 'یزد', pic: [, , ] },
        { id: '4', name: 'قالی', category: 'صنایع دستی', price: '1000000', number: '50', seller: 'خسروی', state: 'یزد', pic: [, , ] },
        { id: '5', name: 'قالی', category: 'صنایع دستی', price: '1000000', number: '50', seller: 'خسروی', state: 'یزد', pic: [, , ] },
    ]
})
export const getters = {
    allproduct(state) {
        return state.allproduct
    }

}
export const mutations = {

}
export const actions = {

}