const STOR_KEY = 'vue-todolist'

export default {
    fetch () {
        return JSON.parse(window.localStorage.getItem(STOR_KEY) || '[]')
    },
    save (items) {
        window.localStorage.setItem(STOR_KEY, JSON.stringify(items))
    }
}