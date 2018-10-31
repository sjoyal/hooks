export default function createAction(type) {
  const actionCreator = payload => ({ type, payload })

  actionCreator.toCase = () => type

  return actionCreator
}
