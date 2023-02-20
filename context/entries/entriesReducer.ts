import { EntriesState } from './'

type EntriesActionType = { type: '[Entries] - Add entries' }

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case '[Entries] - Add entries':
      return {
        ...state,
      }

    default:
      return state
  }
}
