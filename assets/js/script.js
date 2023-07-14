function generatePassword() {
    const lengthInput = document.getElementById('password-length');
    const output = document.getElementById('password-output');
    const copyMessage = document.getElementById('copy-message');

    const length = parseInt(lengthInput.value);
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    output.value = password;
    copyMessage.style.display = 'none';

    // Copy the password to the clipboard
    const tempInput = document.createElement('input');
    tempInput.setAttribute('type', 'text');
    tempInput.setAttribute('value', password);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    copyMessage.style.display = 'block';
}

function copyToClipboard() {
    const output = document.getElementById('password-output');
    const copyMessage = document.getElementById('copy-message');

    output.select();
    document.execCommand('copy');

    copyMessage.style.display = 'block';
}

