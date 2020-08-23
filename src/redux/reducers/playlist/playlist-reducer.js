import { initialState } from './playlist-initial-state'
import {
  SET_LIST,
  SET_FILTERS,
  SET_FILTER,
  SET_TIMESTAMP,
  SET_LIMIT,
  SET_PAGINATION,
} from './playlist-actions'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST: {
      return {
        ...state,
        list: action.payload.list || [],
        total: action.payload.total
      };
    }

    case SET_FILTERS: {
      return {
        ...state,
        filters: {
          ...action.payload.filters,
        }
      };
    }

    case SET_FILTER: {
      return {
        ...state,
        filter: { ...action.payload.filter }
      };
    }

    case SET_TIMESTAMP: {
      return {
        ...state,
        filter: {
          ...state.filter,
          timestamp: action.payload.timestamp
        }
      };
    }

    case SET_LIMIT: {
      return {
        ...state,
        filter: {
          ...state.filter,
          limit: action.payload.limit
        }
      };
    }

    case SET_PAGINATION: {
      return {
        ...state,
        filter: {
          ...state.filter,
          offset: action.payload.offset,
          page: action.payload.page
        }
      };
    }

    default:
      return state;
  }
}
