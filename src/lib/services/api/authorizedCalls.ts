import { setBaseUrl } from './utilities'

// Authorized get of data
export const authorizedGetCall = (url: any, accessToken: any, process: any, overwrite: any) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': '*',
  }
  return fetch(setBaseUrl(process, overwrite) + url, { headers })
}

// Authorized delete of data
export const authorizedDeleteCall = (url: any, accessToken: any, process: any, overwrite: any) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
  })
}

// Authorized post of form data
export const authorizedPostFormDataCall = (
  url: any,
  accessToken: any,
  data: any,
  dataType: any,
  process: any,
  overwrite: any,
) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'POST',
    headers: {
      'Content-Type': dataType === 'form-data' ? 'multipart/form-data' : 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
    body: dataType === 'form-data' ? data : JSON.stringify(data),
  })
}

// Authorized post of form data
export const authorizedPostCall = (
  url: any,
  data: any,
  accessToken: any,
  process: any,
  overwrite: any,
) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
    body: data,
  })
}

// Authorized post no body
export const authorizedPostNoBody = (url: any, accessToken: any, process: any, overwrite: any) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
  })
}

// Authorized update of data
export const authorizedPutCall = (
  url: any,
  data: any,
  accessToken: any,
  dataType: any,
  process: any,
  overwrite: any,
) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'PUT',
    headers: {
      'Content-Type': dataType === 'form-data' ? 'multipart/form-data' : 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
    body: dataType === 'form-data' ? data : JSON.stringify(data),
  })
}

export const authorizedPutCallNoBody = (
  url: any,
  accessToken: any,
  process: any,
  overwrite: any,
) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
  })
}
