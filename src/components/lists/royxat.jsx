import PropTypes from 'prop-types';
import './custom.css';
import Pagination from '../pagination/Pagination';

const StatusBadge = ({ status }) => {
    const getStyle = (status) => {
        switch (status) {
            case "Boshlang'ich":
                return 'bg-green-100 text-green-800';
            case "O'rta":
                return 'bg-yellow-100 text-yellow-800';
            case "Yuqori":
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <span className={`px-2 py-1 rounded-full text-xs ${getStyle(status)}`}>
            {status}
        </span>
    );
};

// **StatusBadge uchun propTypes**
StatusBadge.propTypes = {
    status: PropTypes.string.isRequired,
};

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-32 h-2 bg-gray-200 rounded-full">
            <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

// **ProgressBar uchun propTypes**
ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};

const PercentageChange = ({ value, change }) => {
    const isPositive = change > 0;
    return (
        <div className="flex items-center gap-1">
            <span>{value}%</span>
            <span className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? '↑' : '↓'} {Math.abs(change)}%
            </span>
        </div>
    );
};

// **PercentageChange uchun propTypes**
PercentageChange.propTypes = {
    value: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
};

const StudentRatings = () => {
    const students = [
        {
            id: 1,
            name: 'Bluenose',
            image: 'https://picsum.photos/200/300',
            status: "Boshlang'ich",
            progress: 40,
            change: 4,
            courses: 2,
            price: '700 000'
        },
        {
            id: 2,
            name: 'Bluenose',
            image: 'https://picsum.photos/200/300',
            status: "Boshlang'ich",
            progress: 40,
            change: 4,
            courses: 2,
            price: '700 000'
        }
    ];

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">Oquvchilar reytingi</h1>
                    <p className="text-sm text-gray-500">Oquvchilarning monitoring royxati</p>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="O'quvchilarni qidirish"
                        className="input input-bordered w-full max-w-xs rounded-md px-6 py-1 border-2 outline-none"
                    />
                    <button className="btn btn-outline border-2 px-10 text-[18px] font-semibold rounded-md">Filter</button>
                </div>
            </div>

            <div className="w-full border rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="border-b">
                            <th className="text-left py-4 px-3">Oquvchilar</th>
                            <th className="text-left py-4 px-3">Status</th>
                            <th className="text-left py-4 px-3">Darajasi</th>
                            <th className="text-left py-4 px-3">Mavjud kurslar</th>
                            <th className="text-left py-4 px-3">Barcha tolovlar</th>
                        </tr>
                    </thead>
                </table>
                <div className="max-h-48 overflow-y-auto custom-scroll">
                    <table className="w-full">
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="border-b">
                                    <td className="py-3 px-3">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={student.image}
                                                alt="Student"
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <span>{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-3">
                                        <StatusBadge status={student.status} />
                                    </td>
                                    <td className="px-3">
                                        <div className="flex items-center gap-4">
                                            <ProgressBar progress={student.progress} />
                                            <PercentageChange
                                                value={student.progress}
                                                change={student.change}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-3">{student.courses}</td>
                                    <td className="px-3">
                                        {student.price} <span className="text-sm text-gray-500">sum</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-4">
                <Pagination />
            </div>
        </div>
    );
};

export default StudentRatings;
