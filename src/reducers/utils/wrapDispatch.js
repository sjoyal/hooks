// NOTE: this isn't currently used
// it could be used in correlation with a mapping function to eliminate boilerplate
// passing dispatch and actions down as props
export default function wrapDispatch(action, dispatch) {
  return payload => {
    dispatch(action(payload))
  }
}
