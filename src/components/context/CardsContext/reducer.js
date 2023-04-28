export const reducer = (state, action) => {
	let result = state.filter(card => {
		return card.id !== action.id
	})
	return result;
}