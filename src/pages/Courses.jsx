import { Bell, Search } from 'lucide-react'
import Coursecard from '../components/Coursecard/Coursecard'
// import Coursecardtwo from '../components/Coursecard/Coursecardtwo'

const Courses = () => {
  return (
    <div>
      <div className="mx-auto mt-5 max-w-[1240px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center border p-2 w-[741px]">
            <Search size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Qidirish"
              className="w-full outline-none text-gray-700"
            />
          </div>
          <div className="flex gap-8">
            <span className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://picsum.photos/200/300"
                alt="Admin"
              />
              <span>
                <h3 className="text-[#4C4C4C] text-[14px] font-[600]">George Kim</h3>
                <p className="text-[#B3B3B3] text-[14px] font-[500]">Admin</p>
              </span>
            </span>
            <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full">
              <Bell />
            </button>
          </div>
        </div>

        <div className='container max-w-[1240px] mt-4 mx-auto'>
          <Coursecard></Coursecard>

          {/* <Coursecardtwo></Coursecardtwo> */}
        </div>
      </div>
    </div>
  )
}

export default Courses