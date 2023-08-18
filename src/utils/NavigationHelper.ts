import React from 'react';
import { DrawerActions, NavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
    navigationRef.current?.navigate(name, params);
}

export function replace(name: string, params?: any) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(number = 1) {
    navigationRef.current?.dispatch(StackActions.pop(number));
}

export function openDrawer() {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function closeDrawer() {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

export function goBack() {
    navigationRef.current?.goBack();
}

export function setRoot(routeName: string, params = {}) {
    navigationRef.current?.reset({
        index: 0,
        routes: [
            {
                name: routeName,
                params,
            },
        ],
    });
}

export function getCurrentRoute() {
    const currentRoute = navigationRef.current?.getCurrentRoute();
    return currentRoute?.name;
}
