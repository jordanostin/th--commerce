const getVerifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getVerifyToken;
