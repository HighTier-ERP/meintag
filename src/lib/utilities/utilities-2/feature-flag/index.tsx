const FeatureFlag = ({ search, children, flag }: any) => {
  const admin = search?.get('admin') ? search.get('admin') : 0
  const sysadmin = search?.get('sysadmin') ? search.get('sysadmin') : 0
  const license = search?.get('lic') ? search.get('lic') : null
  const amv = search?.get('amv') ? search.get('amv') : null

  if (sysadmin !== 0 && sysadmin !== '0' && flag === 'system-admin') {
    return children
  }

  if (admin !== 0 && admin !== '0' && flag === 'client-admin') {
    return children
  }

  if (license === 'premium' && flag === 'premium') {
    return children
  }

  if (amv === 'null' && flag === 'amv') {
    return <></>
  }


  if (amv !== 'null' && flag === 'amv') {
    return children
  }

  if (license === 'basic' && flag === 'basic') {
    return children
  }

  return <></>
}

export default FeatureFlag
