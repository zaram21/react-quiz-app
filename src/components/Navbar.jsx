import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-pastelBlue p-4 flex items-center justify-between shadow'>
      <Link to="/" className='flex items-center gap-2 text-lg font-semibold'>
        <AcademicCapIcon className="h-6 w-6 text-pastelPink hover:text-pastelGreen" />
        Quiz App
      </Link>
      <Link to="/result" className='bg-pastelPink py-2  px-4 rounded hover:bg-pastelGreen transition'>
        Results
      </Link>
    </nav>
  )
}

export default Navbar