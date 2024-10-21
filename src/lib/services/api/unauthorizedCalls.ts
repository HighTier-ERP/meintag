import { setBaseUrl } from './utilities'

//Unauthorized post call
export const postCall = (url: any, data: any, dataType: any, process: any, overwrite: any) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'POST',
    headers: {
      'Content-Type': dataType === 'form-data' ? 'multipart/form-data' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
    body: dataType === 'form-data' ? data : JSON.stringify(data),
  })
}

export const postCallParams = (url: any, data: any, process: any, overwrite: any) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
    body: JSON.stringify(data),
  })
}

//Unauthorized post callno content type change
export const postCallOnlyBody = (url: any, data: any, process: any, overwrite: any) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
    body: data,
  })
}

//Unauthorized delete call
export const deleteCall = (url: any, process: any, overwrite: any) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
  })
}

export const postFormDataCall = (
  url: any,
  data: any,
  dataType: any,
  process: any,
  overwrite: any,
) => {
  return fetch(setBaseUrl(process, overwrite) + url, {
    method: 'POST',
    headers: {
      'Content-Type': dataType === 'form-data' ? 'multipart/form-data' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
    },
    body: dataType === 'form-data' ? data : JSON.stringify(data),
  })
}
