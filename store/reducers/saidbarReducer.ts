
export default function saidbarReducer(state, action) {
  switch (action.type) {
    case 'Hide':
      return {classes: state.classes + ' hidden'}
    case 'Show':
      return {classes: state.classes}
    default:
      return {classes: state.classes + ' hidden'}
  }
}