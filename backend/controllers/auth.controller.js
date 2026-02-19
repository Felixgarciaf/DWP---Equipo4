import * as authService from "../services/auth.service.js";

export const register = async (req, res, next) => {
    try {
        const userId = await authService.register(req.body);

        res.status(201).json({
            success: true,
            message: "Usuario registrado correctamente",
            userId
        });

    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        res.cookie("refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: false, 
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success: true,
            accessToken: result.accessToken,
            user: result.user
        });

    } catch (error) {
        next(error);
    }
};
