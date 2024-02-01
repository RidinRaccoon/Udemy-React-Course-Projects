/* eslint-disable import/no-extraneous-dependencies */
import * as RR from 'react-redux';
import type { RootState, AppDispatch } from '../store/index';

// https://redux.js.org/tutorials/typescript-quick-start
// Replaces 'useDispatch' and 'useSelector' throughout app
export const useAppDispatch: () => AppDispatch = RR.useDispatch;
export const useAppSelector: RR.TypedUseSelectorHook<RootState> =
  RR.useSelector;


