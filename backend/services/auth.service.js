import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as userModel from "../models/user.model.js";

export const register = async (data) => {

    const { name, email, address, water_meter, password } = data;

    if (!name || !email || !address || !water_meter || !password) {
        throw new Error("Todos los campos son obligatorios");
    }

    const existingEmail = await userModel.findByEmail(email);
    if (existingEmail) {
        throw new Error("El correo ya está registrado");
    }

    const existingMeter = await userModel.findByWaterMeter(water_meter);
    if (existingMeter) {
        throw new Error("El medidor ya está registrado");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await userModel.createUser({
        name,
        email,
        address,
        water_meter,
        password: hashedPassword,
        role: "user"
    });
};

export const login = async (email, password) => {

    if (!email || !password) {
        throw new Error("Email y contraseña requeridos");
    }

    const user = await userModel.findByEmail(email);

    if (!user) {
        throw new Error("Credenciales inválidas");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Credenciales inválidas");
    }

    if (!user.is_active) {
        throw new Error("Usuario deshabilitado");
    }

    const token = jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES }
    );

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    };
};
