import { db } from "@/lib/db";

export const getVerificationTokenByToken = async(
    token: String
) => {
    try {
        const verficationToken = await db.verificationToken.findUnique({
            where:{token}
        });
        return verficationToken;
    } catch {
        return null;
    }
}

export const getVerificationTokenByEmail = async(
    email: String
) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
        where:{email}
    });
    return verificationToken;
    } catch {
        return null;
    }
}