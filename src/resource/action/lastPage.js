const LASTPAGE_CHANGE = 'LASTPAGE_CHANGE'

const updateLastPage = date => {
	return {
		type: LASTPAGE_CHANGE,
		payload: {
			lastPage: date,
		}
	}
}

export default updateLastPage
