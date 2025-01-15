import React from 'react';
import './custom.css'

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

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-32 h-2 bg-gray-200 rounded-full">
            <div
                className="h-full bg-gray-600 rounded-full"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
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
        },
        {
            id: 3,
            name: 'Bluenose',
            image: 'https://picsum.photos/200/300',
            status: "Boshlang'ich",
            progress: 40,
            change: 4,
            courses: 2,
            price: '700 000'
        },
        {
            id: 4,
            name: 'Pennywise',
            image: 'https://picsum.photos/200/300',
            status: "O'rta",
            progress: 57,
            change: -8,
            courses: 10,
            price: '700 000'
        },
        {
            id: 5,
            name: 'Pennywise',
            image: 'https://picsum.photos/200/300',
            status: "O'rta",
            progress: 57,
            change: -8,
            courses: 10,
            price: '700 000'
        },

    ];

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold mb-1">O'quvchilar reytingi</h1>
                <p className="text-sm text-gray-500">O'quvchilarning monitoring ro'yxati</p>
            </div>

            {/* Table */}
            <div className="overflow-auto max-h-72 custom-scroll">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-4">O'quvchilar</th>
                            <th className="text-left py-4">Status</th>
                            <th className="text-left py-4">Darajasi</th>
                            <th className="text-left py-4">Mavjud kurslar</th>
                            <th className="text-left py-4">Barcha to'lovlar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-b">
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={student.image}
                                            alt="Student"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <span>{student.name}</span>
                                    </div>
                                </td>
                                <td>
                                    <StatusBadge status={student.status} />
                                </td>
                                <td>
                                    <div className="flex items-center gap-4">
                                        <ProgressBar progress={student.progress} />
                                        <PercentageChange
                                            value={student.progress}
                                            change={student.change}
                                        />
                                    </div>
                                </td>
                                <td>{student.courses}</td>
                                <td>{student.price} <span className="text-sm text-gray-500">so'm</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination limit 7 ta */}
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
    );
};

export default StudentRatings;
