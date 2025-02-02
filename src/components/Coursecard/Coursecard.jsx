import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../../api';
import { Play } from 'lucide-react';

const CourseCard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const response = await API.get('/category');
      setCourses(response.data || []);
    } catch {
      setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourse = async (courseName, courseDesc, coursePrice) => {
    try {
      await API.post('/category', {
        category_name: courseName,
        category_desc: courseDesc,
        price: parseFloat(coursePrice),
        videos: [],
      });
      fetchCourses();
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  const handleClass = (course) => {
    navigate('/textbooks', { state: { selectedCourse: course } });
  };

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className='mt-6 text-2xl font-bold'>Kurslar</h1>
      <div className="mt-4 flex flex-wrap gap-4">
        {courses.map((course, index) => (
          <div key={index} className='bg-blue-500 text-white p-4 rounded-xl shadow-lg w-[400px] h-64'>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-bold">{course.category_name}</h3>
              <button
                className="text-white bg-[#96B7F5] p-2 rounded-full w-10 h-10"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="font-bold">•••</span>
              </button>
            </div>
            <p className="text-sm mt-2">{course.category_desc}</p>
            <div className="flex items-center mt-2">
              <div className="bg-white text-blue-500 p-2 rounded-full">
                <Play />
              </div>
              <span className="text-[14px] font-semibold ml-3">
                {(course.videos || []).length} Video
              </span>
              <span className="text-[14px] ml-2">+ Workbook</span>
            </div>
            <p className="text-[18px] font-bold mt-4">{course.price} sum</p>
            <button
              onClick={() => handleClass(course)}
              className="bg-white text-blue-500 font-semibold text-lg px-5 py-1 mt-4 rounded-full shadow-md hover:bg-gray-100"
            >
              Darsliklar
            </button>
          </div>
        ))}
      </div>

      <AddCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCourse={handleAddCourse}
      />
    </div>
  );
};

const AddCourseModal = ({ isOpen, onClose, onAddCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [coursePrice, setCoursePrice] = useState('');

  const handleSubmit = () => {
    if (!courseName || !courseDesc || !coursePrice) {
      alert("Iltimos, barcha maydonlarni to&apos;ldiring.");
      return;
    }
    onAddCourse(courseName, courseDesc, coursePrice);
    onClose();
    setCourseName('');
    setCourseDesc('');
    setCoursePrice('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[650px] relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 focus:outline-none text-xl font-bold"
          aria-label="Close modal"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Kurs nomi"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Kurs tavsifi"
            value={courseDesc}
            onChange={(e) => setCourseDesc(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Narxi"
            value={coursePrice}
            onChange={(e) => setCoursePrice(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex justify-between space-x-4 mt-8">
          <button
            type="button"
            className="w-1/2 px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
            onClick={onClose}
          >
            Bekor qilish
          </button>
          <button
            type="button"
            className="w-1/2 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Tasdiqlash
          </button>
        </div>
      </div>
    </div>
  );
};

AddCourseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddCourse: PropTypes.func.isRequired,
};

export default CourseCard;
