const STRORAGE_KEY = 'todos-vuejs'
export default {
	fetch: function () {
		return JSON.parse(window.localStorage.getItem(STRORAGE_KEY) || '[]')
	},
	save: function (items) {
		window.localStorage.setItem(STRORAGE_KEY, JSON.stringify(items))
	}
}