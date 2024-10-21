import { WINDOW } from '../services'
import { useState } from 'react'

export const clearLocalStorage = () => {
  WINDOW.localStorage.clear()
}
export const resetStorage = () => {
  WINDOW.localStorage.setItem('access_token', null)
  WINDOW.localStorage.setItem('client_id', null)
  WINDOW.localStorage.setItem('original_client_id', null)
  WINDOW.localStorage.setItem('user_id', null)
  WINDOW.localStorage.setItem('refresh_token', null)
  WINDOW.localStorage.setItem('permission_set', null)
  WINDOW.localStorage.setItem('client_keys', null)
  WINDOW.localStorage.setItem('default_control_sets', null)
  WINDOW.localStorage.setItem('username', null)
  WINDOW.localStorage.setItem('is_in_imposter', null)
  WINDOW.localStorage.setItem('isDefaulControlSet', null)
  WINDOW.localStorage.setItem('current_set_key', null)
}

const useLocalStorage = (key: any, defaultValue: any) => {
  // Create state variable to store
  // localStorage value in state
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = WINDOW.localStorage.getItem(key)
      // If value is already present in
      // localStorage then return it

      // Else set default value in
      // localStorage and then return it
      if (value) {
        return JSON.parse(value)
      } else {
        WINDOW.localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (error) {
      WINDOW.localStorage.setItem(key, JSON.stringify(defaultValue))
      return defaultValue
    }
  })

  // this method updates our localStorage and our state
  const setLocalStorageStateValue = (valueOrFn: any) => {
    let newValue
    if (typeof valueOrFn === 'function') {
      const fn = valueOrFn
      newValue = fn(localStorageValue)
    } else {
      newValue = valueOrFn
    }
    WINDOW.localStorage.setItem(key, JSON.stringify(newValue))
    setLocalStorageValue(newValue)
  }
  return [localStorageValue, setLocalStorageStateValue]
}

export default useLocalStorage
