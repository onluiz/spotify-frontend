import {
  SET_LIST,
  SET_FILTERS,
  SET_FILTER,
  SET_TIMESTAMP,
  SET_LIMIT,
} from './playlist-actions'

export const initialState = {
  list: [],
  filter: {
    locale: 'pt_BR',
    country: 'BR',
    timestamp: new Date().toISOString(),
    limit: 20,
    offset: 0,
  },
  filters: {
    locale: {
      id: '',
      name: '',
      values: []
    },
    country: {
      id: '',
      name: '',
      values: []
    },
    timestamp: {
      id: '',
      name: '',
      validation: {
        entityType: "DATE_TIME",
        pattern: "yyyy-MM-dd HH:mm:ss",
        primitiveType: "STRING",
      }
    },
    limit: {
      id: '',
      name: '',
      validation: {
        max: 50,
        min: 1,
        primitiveType: "INTEGER",
      }
    },
    offset: {
      id: '',
      name: '',
      validation: {
        primitiveType: "INTEGER",
      }
    },
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST: {
      return {
        ...state,
        list: [...action.payload.list]
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

    default:
      return state;
  }
}
