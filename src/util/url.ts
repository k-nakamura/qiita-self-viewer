export function addGetParameters(url: string, params: { [p: string]: string | number }) {
  if (Object.keys(params).length === 0) {
    return url;
  }

  return url + '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
}