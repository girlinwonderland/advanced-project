import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/reduxStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
