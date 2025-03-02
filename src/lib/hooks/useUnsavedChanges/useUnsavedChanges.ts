import { useEffect } from 'react'

function useUnsavedChanges(isDirty: boolean, router: any) {
  // prompt the user if they try and leave with unsaved changes
  useEffect(() => {
    const warningText = 'You have unsaved changes - are you sure you wish to leave this page?'
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      if (!isDirty) return
      e.preventDefault()
      return (e.returnValue = warningText)
    }
    const handleBrowseAway = () => {
      if (!isDirty) return
      if (window.confirm(warningText)) return
      router.events.emit('routeChangeError')
      throw 'routeChange aborted.'
    }
    window.addEventListener('beforeunload', handleWindowClose)
    router.events.on('routeChangeStart', handleBrowseAway)
    return () => {
      window.removeEventListener('beforeunload', handleWindowClose)
      router.events.off('routeChangeStart', handleBrowseAway)
    }
  }, [isDirty, router.events])
}

export default useUnsavedChanges
