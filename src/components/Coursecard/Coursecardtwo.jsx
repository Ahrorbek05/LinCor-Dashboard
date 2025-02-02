const Coursecardtwo = () => {
  const cursobject = [
    { Cursname: "Topik |", description: "siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni olasiz", coursedars: "24 Video", workbook: "Workbook", narx: "320 000 so'm" },
    { Cursname: "Topik ||", description: "siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni olasiz", coursedars: "24 Video", workbook: "Workbook", narx: "320 000 so'm" },
    { Cursname: "Topik |||", description: "siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni olasiz", coursedars: "24 Video", workbook: "Workbook", narx: "320 000 so'm" }
  ]
  return (
    <div>
      <div>
        <h1 className='mt-5 text-2xl font-bold'>Topik</h1>
        <div className="mt-5 flex gap-4">

          {cursobject && cursobject.map((value, index) => (
            <div key={index} className='bg-[#FF9D7B] text-white p-4 rounded-xl shadow-lg w-[400px] h-64'>
              <div className="flex justify-between items-center">
                <h3 className="text-[20px] font-bold">{value.Cursname}</h3>
                <button className="text-white bg-[#F8CDBF] p-2 rounded-full w-10 h-10">
                  <span className="font-bold">•••</span>
                </button>
              </div>


              <p className="text-sm mt-2">
                {value.description}
              </p>


              <div className="flex items-center mt-4">
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
                <span className="text-sm font-semibold ml-3">{value.coursedars}</span>
                <span className="text-sm ml-2">+ {value.workbook}</span>
              </div>


              <p className="text-[18px] font-bold mt-2">{value.narx}</p>


              <button className="bg-white text-blue-500 font-semibold text-[16px] px-5 py-1 mt-4 rounded-full shadow-md hover:bg-gray-100">
                Darsliklar
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Coursecardtwo