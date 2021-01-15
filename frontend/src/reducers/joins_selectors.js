export const joinSelector = (state, ownProps) => {
    if (state.session.isAuthenticated === false) {
        return null
    }

    let arr = Object.values(state.entities.joins)
    let res = []
    arr.forEach((obj) => {
        if (obj.eventId === ownProps.event._id && obj.joinerId === state.session.currentUser.user._id){
            res.push(obj) 
        }
    })
    return res[0]
}

export const joinSelector2 = (state, ownProps) => {
    if (state.session.isAuthenticated === false) {
        return null
    }

    let arr = Object.values(state.entities.joins)
    let res = []
    arr.forEach((obj) => {
        if (obj.eventId === ownProps && obj.joinerId === state.session.currentUser.user._id) {
            res.push(obj)
        }
    })
    return res[0]
}


export const countSelector = (state) => {
    let arr = Object.values(state.entities.joins)
    let res = { eventId : 0}
    arr.forEach((obj) => {
        if (res[obj.eventId] === undefined){
            res[obj.eventId] = 1 
        } else {
            res[obj.eventId] += 1
        }
    })
    return res
}


export const eventSelector = (state) => {
    if (state.session.currentUser.user === undefined) {
        return null
    }

    let arr = Object.values(state.entities.joins)
    let res = []
    arr.forEach((obj) => {
        if (obj.joinerId === state.session.currentUser.user._id) {
            res.push(obj)
        }
    })

    let eventList = []
    res.forEach(id => {
        eventList.push(id.eventId)
    })

    let arr2 = Object.values(state.entities.events)
    let result = []
    arr2.forEach((pojo => {
        if (eventList.includes(pojo._id)) {
            result.push(pojo)
        }
    }))
    
    return result
}