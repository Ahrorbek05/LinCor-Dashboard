const Pagination = () => {
  return (
      <div>
          <div className="flex items-center gap-2 mt-6">
              <span className="text-sm text-gray-500">Oldingi sahifa</span>
              {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                  <button
                      key={page}
                      className={`w-8 h-8 rounded-lg ${page === 1 ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                  >
                      {page}
                  </button>
              ))}
              <span className="text-sm text-gray-500">Keyingi sahifa</span>
          </div>

    </div>
  )
}

export default Pagination