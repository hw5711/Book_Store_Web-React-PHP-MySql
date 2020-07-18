const shoppinglist = (state = '', action) => {
    switch (action.type) {
        case 'ADDTOLIST':
            return state + ',' + action.newbook
        default:
            return state
    }
}

export default shoppinglist;