export const req = {
  query: {
    filter: {
      name: "eq(John)"
    }
  },
  path: "/users/list",
  method: "GET"
};

export const res = {
  on: jest.fn(),
  removeListener: jest.fn()
};
