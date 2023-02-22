import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <div>
      <AppSidebar open={open} onToggleSidebar={setOpen} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader onToggleSidebar={() => setOpen((v) => !v)} />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
