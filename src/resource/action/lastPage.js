const CHANGELASTPAGE = 'CHANGELASTPAGE'

const updateLastPage = date => {
	return {
		type: CHANGELASTPAGE,
		payload: {
			lastPage: date,
		}
	}
}

export default updateLastPage
