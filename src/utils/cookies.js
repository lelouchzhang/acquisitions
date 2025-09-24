export const cookies = {
  getOptions: () => ({
    // js不可读写，只能随http往返
    httpOnly: true,
    // 仅https请求才会携带cookies
    secure: process.env.NODE_ENV === 'production',
    // 同源策略，阻止跨站发送
    sameSite: 'strict',
    // 有效期内cookies随浏览器请求传递
    maxAge: 15 * 60 * 1000,
  }),

  set: (res, name, value, options = {}) => {
    res.cookie(name, value, { ...cookies.getOptions(), ...options });
  },

  clear: (res, name, options = {}) => {
    res.clearCookie(name, { ...cookies.getOptions(), ...options });
  },

  get: (req, name) => {
    return req.cookies[name];
  },
};
