// import Toast from 'react-native-root-toast';

// interface IToastProps {
//     message?: string;
//     position?: number;
//     icon?: any;
// }

// export default class ToastUtils {
//     static TOAST_POSITION_BOTTOM = Toast.positions.BOTTOM;

//     static TOAST_POSITION_CENTER = Toast.positions.CENTER;

//     static TOAST_POSITION_TOP = Toast.positions.TOP;

//     static TOAST_TYPES = {
//         DEFAULT: 'default',
//         SUCCESS: 'success',
//         ERROR: 'error',
//     };

//     static showToast(toastProps: IToastProps = {}) {
//         const { message = '', position = ToastUtils.TOAST_POSITION_CENTER } = toastProps;
//         Toast.show(message, {
//             duration: Toast.durations.SHORT,
//             position,
//             shadow: false,
//             animation: true,
//             hideOnPress: true,
//             opacity: 1,
//             delay: 0,
//             type: ToastUtils.TOAST_TYPES.DEFAULT,
//         });
//     }

//     static showSuccessToast(toastProps: IToastProps = {}) {
//         const { message = '', position = ToastUtils.TOAST_POSITION_TOP, icon = null } = toastProps;

//         Toast.show(message, {
//             duration: Toast.durations.SHORT,
//             position,
//             shadow: false,
//             animation: true,
//             hideOnPress: true,
//             opacity: 1,
//             delay: 0,
//             type: ToastUtils.TOAST_TYPES.SUCCESS,
//             icon: icon,
//         });
//     }

//     static showErrorToast(toastProps: IToastProps = {}) {
//         const { message = '', position = ToastUtils.TOAST_POSITION_TOP, icon = null } = toastProps;
//         Toast.show(message, {
//             duration: Toast.durations.SHORT,
//             position,
//             shadow: false,
//             animation: true,
//             hideOnPress: true,
//             opacity: 1,
//             delay: 0,
//             type: ToastUtils.TOAST_TYPES.ERROR,
//             icon: icon,
//         });
//     }
// }
