import types from './mutation-types'

export default {
    async rjlogin({
        commit,
        state
    }){
        commit(types.RJ_NAME);
    }
}