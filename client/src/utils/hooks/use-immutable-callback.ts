import { useRef, useCallback } from 'react';

export function useImmutableCallback<T extends Function>(callback: T) {
    let callbackRef = useRef<T>();

    callbackRef.current = callback;

    return useCallback(
        function (...args: unknown[]) {
            return callbackRef.current?.(...args);
        },
        [callbackRef],
    );
}