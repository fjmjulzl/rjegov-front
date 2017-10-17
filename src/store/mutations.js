import types from './mutation-types'

export default {
    [types.RJ_LOGIN](state, {
        rjname
    }){
        state.rjname = rjname
    }
}