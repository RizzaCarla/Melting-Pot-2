export const likeSelector = (state) => {

    let arr = Object.values(state.entities.likes)
    let res = []
    arr.forEach((obj) => {
        if (obj.likerId === state.session.currentUser.user._id) {
            res.push(obj)
        }
    })

    let likeList = []
    res.forEach(id => {
        likeList.push(id.recipeId)
    })

    let arr2 = Object.values(state.entities.recipes)
    let result = []
    arr2.forEach((pojo => {
        if (likeList.includes(pojo._id)) {
            result.push(pojo)
        }
    }))

    return result
}