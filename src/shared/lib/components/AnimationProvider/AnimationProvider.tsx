import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');

type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType,
    Spring?: SpringType,
    isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModule = () => {
    return Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ]);
};

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModule().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setLoaded(true);
        });
    }, []);

    const value = useMemo<AnimationContextPayload>(() => ({
        isLoaded,
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
