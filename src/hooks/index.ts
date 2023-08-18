import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import type { RootState, AppDispatch } from '../redux/store';
// import { createSelector } from 'reselect';
import { useEffect, useRef } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//----------------------------------------------------------------------------------------
// Example: useGetCurrentNetworkConfig
//----------------------------------------------------------------------------------------
// export const useGetCurrentNetworkConfig = () => {
//     const currentNetwork = useSelector(
//         createSelector(
//             (state: RootState) => state.system.network,
//             network => network,
//         ),
//     );
//     return currentNetwork;
// };

export const useIsMounted = () => {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    });

    return isMounted;
};

export const usePrevious = <T>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};
