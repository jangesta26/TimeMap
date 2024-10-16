import DefaultLayout from '@/src/component/Layout/DefaultLayout'
import React from 'react'
const PageLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}

export default PageLayout
