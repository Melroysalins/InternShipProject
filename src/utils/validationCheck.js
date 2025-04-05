const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

export function CheckValidation(email, password) {
  if (emailRegex.test(email) && passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}
