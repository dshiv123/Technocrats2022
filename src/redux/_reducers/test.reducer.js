
export function test(state = {}, action) {
  switch (action.type) {
    case 1:
      return {
        type: 'alert-success',
        message: action.message
      };
    case 2:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case 3:
      return {};
    default:
      return state
  }
}