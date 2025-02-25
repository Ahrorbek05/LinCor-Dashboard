import PropTypes from "prop-types";

const Pagination = ({ totalUsers, usersPerPage, currentPage, setCurrentPage }) => {
    if (!totalUsers || !usersPerPage) return null;

    const totalPages = Math.ceil(totalUsers / usersPerPage);
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center gap-2 mt-6 justify-center">
            <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="text-sm text-gray-500 hover:underline"
                disabled={currentPage === 1}
            >
                Oldingi sahifa
            </button>
            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded-lg ${currentPage === page ? "bg-gray-900 text-white" : "hover:bg-gray-100"
                            }`}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="text-sm text-gray-500 hover:underline"
                disabled={currentPage === totalPages}
            >
                Keyingi sahifa
            </button>
        </div>
    );
};

Pagination.propTypes = {
    totalUsers: PropTypes.number.isRequired,
    usersPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
