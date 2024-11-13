import { Bell } from 'lucide-react'
const Header = () => {
  return (
    <header className="bg-white h-14  justify-end items-center gap-6 flex p-4">
      <Bell size={24} />
      <img src='\' className='rounded-full' />
    </header>
  )
}

export default Header