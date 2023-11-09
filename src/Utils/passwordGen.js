export function generatePassword(letter = true, caps = true, number = true, special = true) {
    if (!(letter || caps || number || special)) {
        throw new Error("At least one attribute should be On");
    }

    

    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+{}[]|;:,.<>?";

    let charSet = lowercaseLetters;
    if (caps) charSet += uppercaseLetters;
    if (number) charSet += numbers;
    if (special) charSet += specialChars;

    let password = '';
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.charAt(randomIndex);
    }

    return password;
}

// Example usage:
const password = generatePassword(true, true, true, true, 16);
console.log(password);
