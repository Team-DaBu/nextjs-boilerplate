import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { reducer as tokenReducer } from '@/application/usecases/token.usecase';
import { TokenEntity } from '../../application/entities/token.entity';

interface ReducerState {
  tokenAdaptor: TokenEntity;
}

// NOTE: https://velog.io/@1-blue/Next.js-TypeScript-Redux-Toolkit-Redux-Saga%EC%A0%81%EC%9A%A9
export const rootReducer = (state: any, action: AnyAction): CombinedState<ReducerState> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        tokenAdaptor: tokenReducer,
      })(state, action);
  }
};
export type RootState = ReturnType<typeof rootReducer>;
