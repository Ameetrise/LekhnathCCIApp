// import crypto from "react-native-crypto";
export const apiHelper = (() => {
  const getApi = (url, options = {}) => {
    try {
      const defaultOptions = {
        method: 'GET',
        headers: {
          Authorization:
            options.token || '678996c79ac76dd06e73c82f1LAZLKVUX3WeCb3a',
          'Content-Type': 'application/json',
        },
      };
      return fetch(url, defaultOptions)
        .then(res => {
          // if (res.status >= 200 && res.status < 300)
          return res.json();
          // else console.log("%c Erorr while fetching ", "background: #ff111130; color: #ff0101", url, res);
        })
        .then(data => {
          return data;
        })
        .catch(err => {
          throw err;
        });
      // return await fetch(url, defaultOptions).then(response => {
      //   return response ? (response.ok ? response.json() : response) : null;
      // });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const postApi = (body, url, options = {}) => {
    try {
      const defaultOptions = {
        method: 'POST',
        headers: {
          Authorization:
            options.token || '678996c79ac76dd06e73c82f1LAZLKVUX3WeCb3a',
          'Content-Type': 'application/json',
        },
        body: body,
      };

      return fetch(url, defaultOptions)
        .then(res => res.json())
        .then(data => {
          return data;
        })
        .catch(err => {
          throw err;
        });
    } catch (err) {
      throw err;
    }
  };

  return {
    getApi: getApi,
    postApi: postApi,
  };
})();
