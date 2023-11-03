'use client';

import { Provider } from 'react-redux';
import { store } from './store';

interface IProps {
  children: React.ReactNode;
}
export default function ReduxProvider({ children }: IProps) {
  return <Provider store={store()}>{children}</Provider>;
}
