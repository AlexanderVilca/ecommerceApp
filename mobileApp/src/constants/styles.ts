import { StyleSheet } from "react-native";
import { colors } from "./colors";

//Spacing constants
export const spacing = {
    screenHorizontal: 10,
    screenVertical: 16,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
}

//Common text styles
export const textStyles = StyleSheet.create({
    heading1: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    heading2: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    heading3: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.textPrimary,
    },
    heading4: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.textPrimary,
    },
    body: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.textPrimary,
    },
    bodyLarge: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.textPrimary,
    },
    bodySmall: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.textPrimary,
    },
    caption: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.textSecondary,
    },
    button: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.white,
    }
})

//Common container styles
export const containerStyles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    screenContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
})

//Common button styles
export const buttonStyles = StyleSheet.create({
    primary: {
        backgroundColor: colors.primary,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondary: {
        backgroundColor: colors.info,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        backgroundColor: colors.error,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    outline: {
        backgroundColor: colors.transparent,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

//Common card styles
export const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: colors.background,
        borderRadius: 8,
        padding: 16,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    }
})

//Common shadow styles
export const shadowStyles = StyleSheet.create({
    small: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    medium: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    large: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 5,
    }
})