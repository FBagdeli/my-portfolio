export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
}

export const sendEmail = (name, email, message) => {
  if (!checkInfo(name, email, message)) {
    return false;
  }
  return true;
}

export const checkInfo = (name, email, message) => {
  if (name === '' || email === '' || message === '') {
    return false;
  }
  if (!isValidName(name)) {
    return false;
  }
  if (email.length > 254) {
    return false;
  }
  if (!isValidEmail(email)) {
    return false;
  }
  return true;
}

export const isValidName = (name) => {
  if (name.length < 3) {
    return false;
  }
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
}

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length > 254) {
    return false;
  }
  
  return emailRegex.test(email);
}