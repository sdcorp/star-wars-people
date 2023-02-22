import React from 'react'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

// eslint-disable-next-line react/prop-types
const AppSidebar = ({ onToggleSidebar, open }) => {
  const [unfoldable, setUnfoldable] = React.useState(false)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={open}
      onVisibleChange={(visible) => {
        onToggleSidebar(visible)
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation.slice(0, 2)} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler className="d-none d-lg-flex" onClick={() => setUnfoldable((v) => !v)} />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
