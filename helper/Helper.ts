import crypto from 'crypto';

class Helper {
    public static GetRandomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    public static GenerateRandomString (length = 4): string {
        return crypto.randomBytes(length).toString('hex');
    }

    public static GenerateRandomText(length = 6) {
        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}

export default Helper;
