import { authorizedGetCall } from './authorizedCalls'
import { postCallOnlyBody } from './unauthorizedCalls'

export const LoginSubmit = (
  formData: any,
  setAccessToken: any,
  setRefreshToken: any,
  setExpireIn: any,
  setPermissionSet: any,
  setOriginalClientId: any,
  setClientKeys: any,
  setUserId: any,
  defaultControlSet: any,
  setDefaultControlSets: any,
  setIsDefaultControlSet: any,
  setCurrentSetKey: any,
  redirectToDashboard: any,
  setError: any,
  setResponseType: any,
  process: any,
  overwrite: any,
) => {
  postCallOnlyBody('token', formData, process, overwrite)
    .then((response) => {
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = response.status
        return Promise.reject(error)
      }
      return response.json()
    })
    .then((data: any) => {
      if (data.access_token && data.access_token !== 'undefined') {
        var access_token = data.access_token
        setAccessToken(data.access_token)
      }
      if (data.refresh_token && data.refresh_token !== 'undefined') {
        setRefreshToken(data.refresh_token)
        var refreshToken = data.refresh_token
      }

      if (data.expires_in && data.expires_in !== 'undefined') {
        setExpireIn(data.expires_in)
        var expires_in = data.expires_in
      }

      if (access_token && access_token !== 'undefined') {
        // Calls users/me and users/roles to get your client id and roles
        authorizedGetCall('users/me', access_token, process, overwrite)
          .then((response) => response.json())
          .then((data: any) => {
            let user = null
            user = data
            authorizedGetCall('users/me/roles', access_token, process, overwrite)
              .then((response) => response.json())
              .then((data: any) => {
                setPermissionSet(JSON.stringify(data.roles))
                let clientKey = null
                const clientKeys: any[] = []
                if (data.roles) {
                  // eslint-disable-next-line prefer-const
                  for (let role of data.roles) {
                    if (role.client) {
                      clientKey = role.client.key.replace('"', '')
                      clientKeys.push({
                        [role.client.key.replace('"', '')]: role.client.name,
                      })
                    }
                  }
                }

                setOriginalClientId(clientKey)
                setClientKeys(JSON.stringify(clientKeys))
                setUserId(data.key.toString())
                if (clientKey) {
                  // Calls clients/id to get your default control set
                  authorizedGetCall(`clients/${clientKey}`, access_token, process, overwrite)
                    .then((response) => response.json())
                    .then((data: any) => {
                      defaultControlSet = data.default_control_set
                      // Calls clients/id/control_sets to get your controls and then
                      // we dispatch them to the global management state and local storage for rehydration
                      // and persitance of data
                      authorizedGetCall(
                        `clients/${clientKey}/control_sets`,
                        access_token,
                        process,
                        overwrite,
                      )
                        .then((response) => response.json())
                        .then((data: any) => {
                          setDefaultControlSets(JSON.stringify(data.control_sets))
                          const filteredSetData = data.control_sets.filter((data: any) => {
                            return data.key === defaultControlSet
                          })
                          setIsDefaultControlSet(JSON.stringify(filteredSetData[0]))
                          setCurrentSetKey(filteredSetData[0].key)
                          redirectToDashboard(
                            clientKey,
                            user.key,
                            filteredSetData[0].key,
                            expires_in,
                            access_token,
                            refreshToken,
                          )

                          setError('Login was successful!')
                          setResponseType('success')
                        })
                    })
                } else {
                  setError('This user does not have a client Id. Please contact an admin to login.')
                  setResponseType('success')
                  redirectToDashboard(null, null, null, expires_in, access_token, refreshToken)
                }
              })
          })
      }
    })
    .catch((error) => {
      setError(error + ' ' + 'Invalid Credentials')
      setResponseType('error')
    })
}
