import React from 'react'
import { useNavigate } from 'react-router-dom';

const Coursecard = () => {
  const cursobject = [
    { Cursname: "Boshlangich daraja", description: "siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni olasiz", coursedars: "24 Video", workbook: "Workbook", narx: "320 000 so'm" },
    { Cursname: "O'rta daraja", description: "siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni olasiz", coursedars: "24 Video", workbook: "Workbook", narx: "320 000 so'm" },
    { Cursname: "Yuqori daraja", description: "siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni olasiz", coursedars: "24 Video", workbook: "Workbook", narx: "320 000 so'm" }
  ];
  const navigate = useNavigate();

  const handleClass = () => {
    navigate('/textbooks')
  }


  return (
    <div>
      <h1 className='mt-6 text-2xl font-bold'>Kurslar</h1>
      <div className="mt-4 flex gap-4">

        {cursobject && cursobject.map((value, index) => (
          <div key={index} className='bg-blue-500 text-white p-4 rounded-xl shadow-lg w-[400px] h-64'>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-bold">{value.Cursname}</h3>
              <button className="text-white bg-[#96B7F5] p-2 rounded-full w-10 h-10" onClick={() => document.getElementById('my_modal_3').showModal()}>
                <span className="font-bold">•••</span>
              </button>
            </div>


            <p className="text-sm mt-2">
              {value.description}
            </p>


            <div className="flex items-center mt-2">
              <div className="bg-white text-blue-500 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.862v4.276a1 1 0 001.555.832l3.197-2.131a1 1 0 000-1.66z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-[14px] font-semibold ml-3">{value.coursedars}</span>
              <span className="text-[14px] ml-2">+ {value.workbook}</span>
            </div>


            <p className="text-[18px] font-bold mt-4">{value.narx}</p>


            <button onClick={handleClass} className="bg-white text-blue-500 font-semibold text-lg px-5 py-1 mt-4 rounded-full shadow-md hover:bg-gray-100">
              Darsliklar
            </button>
          </div>
        ))}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box relative w-[650px] p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none text-xl font-bold"
              aria-label="Close modal"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>
            <form method="dialog">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Boshlang'ich daraja"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni olasiz"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="320 000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex justify-between space-x-4 mt-8">
                <button
                  type="button"
                  className="w-1/2 px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
                  onClick={() => document.getElementById('my_modal_3').close()}
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="w-1/2 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
                >
                  Tasdiqlash
                </button>
              </div>
            </form>
          </div>
        </dialog>

      </div>

    </div>
  )
}

export default Coursecard