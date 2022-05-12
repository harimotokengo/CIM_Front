/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getScrollPosition = (state: AppState) => state.scroll.position

export const getScrollPositionSelector = createSelector(getScrollPosition, position => position)
