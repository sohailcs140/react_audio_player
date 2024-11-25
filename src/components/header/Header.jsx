import React from 'react'
import SearchInput from './search-input/SearchInput'
import UserProfile from './user-profile/UserProfile'
export default function Header() {
  return (
    <header className="p-6 flex gap-4">
        <SearchInput/>
        <UserProfile/>
    </header>
  )
}
