import React from 'react'
import { MainStyle } from './mount.style'
import OverMount from './mount'
import UserList from './UserList'
function MainAppp() {
  return (
    <MainStyle>
        <UserList />
      <OverMount  name='leul' email='hell@gmail.com' />
    </MainStyle>
  )
}

export default MainAppp
