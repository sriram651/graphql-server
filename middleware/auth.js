import { decodeToken } from '../utils/userAuth.js';

export default async function authenticate(req) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return {
            userId: null,
            email: null
        };
    }

    const token = authHeader;
    try {
        const decoded = await decodeToken(token);

        if (!decoded) {
            return {
                userId: null,
                email: null,
                role: null,
            };
        }

        return { 
            userId: decoded.userId, 
            email: decoded.email,
            role: decoded.role,
        };
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
};
