const initialState = {
  list: [],
  pagination: {
    page: null,
    next: '',
    previous: '',
  },
  filter: {
    locale: 'pt_BR',
    country: 'BR',
    timestamp: new Date().toISOString(),
    limit: 5,
    offset: 0,
    page: 1,
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
  },
};

export { initialState }