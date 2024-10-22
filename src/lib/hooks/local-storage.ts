import { useState } from 'react'

export const clearLocalStorage = () => {
  window.localStorage.clear()
}
export const resetStorage = () => {
  window.localStorage.setItem('access_token', '')
  window.localStorage.setItem('client_id', '')
  window.localStorage.setItem('original_client_id', '')
  window.localStorage.setItem('user_id', '')
  window.localStorage.setItem('refresh_token', '')
  window.localStorage.setItem('permission_set', '')
  window.localStorage.setItem('client_keys', '')
  window.localStorage.setItem('default_control_sets', '')
  window.localStorage.setItem('username', '')
  window.localStorage.setItem('is_in_imposter', '')
  window.localStorage.setItem('isDefaulControlSet', '')
  window.localStorage.setItem('current_set_key', '')
}

const useLocalStorage = (key: any, defaultValue: any) => {
  // Create state variable to store
  // localStorage value in state
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)
      // If value is already present in
      // localStorage then return it

      // Else set default value in
      // localStorage and then return it
      if (value) {
        return JSON.parse(value)
      } else {
        window.localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (error) {
      window.localStorage.setItem(key, JSON.stringify(defaultValue))
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
    window.localStorage.setItem(key, JSON.stringify(newValue))
    setLocalStorageValue(newValue)
  }
  return [localStorageValue, setLocalStorageStateValue]
}

export default useLocalStorage
