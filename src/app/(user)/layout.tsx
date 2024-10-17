import DefaultLayout from '@/src/component/Layout/DefaultLayout'
import React from 'react'
import SvgImages from '@/src/svg/SvgImages'

const PageLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <DefaultLayout>
      {children}
      <SvgImages />
    </DefaultLayout>
  )
}

export default PageLayout
