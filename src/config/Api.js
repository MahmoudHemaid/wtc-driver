const dev = {
  url: '',
};
const prod = {
  url: '',
};
export const ApiUrl = __DEV__ ? dev.url : prod.url;

export const GOOGLE_MAPS_APIKEY = 'AIzaSyATZ_x4rIshipx0TUuO8YSP3si-UoPNih0';

export const Api = {
  SIGN_IN: ApiUrl + '/',
};
