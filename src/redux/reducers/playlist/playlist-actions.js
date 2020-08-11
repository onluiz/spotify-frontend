export const SET_LIST = 'SET_LIST'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_FILTER = 'SET_FILTER'
export const SET_TIMESTAMP = 'SET_TIMESTAMP'
export const SET_LIMIT = 'SET_LIMIT'
export const SET_OFFSET = 'SET_OFFSET'

export function setList(list = []) {
  return {
    type: SET_LIST,
    payload: {
      list
    }
  }
}

export function setFilters(filters) {
  return {
    type: SET_FILTERS,
    payload: {
      filters
    }
  }
}

export function setFilter(filter = {
  locale: 'pt_BR',
  country: 'BR',
  timestamp: new Date().toISOString(),
  limit: 20,
  offset: 0,
}) {
  return {
    type: SET_FILTER,
    payload: {
      filter
    }
  }
}

export function setTimestamp(timestamp) {
  return {
    type: SET_TIMESTAMP,
    payload: {
      timestamp
    }
  }
}

export function setLimit(limit) {
  return {
    type: SET_LIMIT,
    payload: {
      limit
    }
  }
}

export function setOffset(page) {
  return {
    type: SET_OFFSET,
    payload: {
      page
    }
  }
}