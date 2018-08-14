import Helmet from "react-helmet"
import React from 'react';
import axios from "axios";

let Helpers = {
  axios: axios,
  baseUrl: '',
  SEOtags: function (title = null, description = null, keyword = null) {
    let commonTitle = 'Home';
    let commonDescription = 'Common Description';
    let commonKeyword = 'Common Keyword';
    return (
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{title ? title : commonTitle}</title>
        <meta name="Keywords" content={keyword ? keyword : commonKeyword}/>
        <meta name="Description" content={description ? description : commonDescription}/>
      </Helmet>
    );
  },
  setLocalStorageData: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getLocalStorageData: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  removeLocalStorageData: (key) => {
    return localStorage.removeItem(key);
  },
};

export default Helpers;