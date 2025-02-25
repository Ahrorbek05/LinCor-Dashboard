import { useEffect, useState } from "react";
import API from "../api";
import StudentCard from "../components/studentbox/studentcard";
import Pagination from "../components/pagination/Pagination";
import Header from "../components/header/header";
import Loader from '../components/loader/Loader'
const Students = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await API.get("/user/all");
        const userData = response.data?.data || response.data || [];
        setUsers(Array.isArray(userData) ? userData : []);
      } catch (error) {
        console.error("Error fetching students:", error);
        setError("O'quvchilarni yuklashda xatolik yuz berdi.");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <div className="max-w-[1240px] mx-auto m-6">
        <Header />
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[1240px] mx-auto m-6">
        <Header />
        <p className="text-center text-red-500 mt-4">{error}</p>
      </div>
    );
  }

  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="max-w-[1240px] mx-auto m-6">
      <Header />
      <div className="flex mt-4 flex-wrap gap-6">
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map((student) => <StudentCard key={student.id} user={student} />)
        ) : (
          <p className="text-center text-gray-500">Hozircha o'quvchilar mavjud emas.</p>
        )}
      </div>
      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Students;
