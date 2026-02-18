import * as authService from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);

        res.status(201).json({
            message: "Usuario registrado correctamente",
            user
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        res.status(200).json({
            message: "Login exitoso",
            ...result
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
