const mailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

export default function formValidation(name, value) {
    switch (name) {
        case 'name':
            if (value.length < 2) return "'name' must have 2 characters at least";
            if (value.length > 50) return "'name' can have 50 characters at sum";
            break;
        case 'family-name':
            if (value.length < 2) return "'family-name' must have 2 characters at least";
            if (value.length > 50) return "'family-name' can have 50 characters at sum";
            break;
        case 'username':
            if (value.length < 2) return "'family-name' must have 2 characters at least";
            if (value.length > 50) return "'family-name' can have 50 characters at sum";
            break;
        case 'email':

            if (!value.match(mailRegEx)) return "'mail' is invalid";
            break;
        case 'password':
            if (value.length < 6) return "'password must have 6 characters at least";
            break;
        case 'confirmPassword':
            if (value.length < 6) return "'confirmPassword' must have 6 characters at least";
            break;
        default:
            return null
    }
}