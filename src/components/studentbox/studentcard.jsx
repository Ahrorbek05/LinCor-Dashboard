import PropTypes from "prop-types";
import { DollarSign, Video, Calendar, MoreHorizontal } from "lucide-react";

const StudentCard = ({ user }) => {
    return (
        <div className="wrapper border border-gray-200 w-[380px] h-[270px] rounded-lg shadow-md bg-white">
            <div className="head p-4 flex justify-between items-center pb-4">
                <div className="person flex items-center gap-4">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={user?.ava_path || "https://picsum.photos/200/300"}
                        alt="user icon"
                    />
                    <span className="flex w-32 flex-col text-[16px] font-semibold">
                        {user?.firstname || "Ism mavjud emas"}
                        <p className="text-[14px] text-[#808080] font-normal">{user?.address || "Manzil yo‘q"}</p>
                    </span>
                </div>
                <button
                    className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full"
                    onClick={() => alert("Qo‘shimcha opsiyalar ochiladi")}
                >
                    <MoreHorizontal size={16} />
                </button>
            </div>

            <div className="hero py-2 p-4 border-t border-b space-y-2">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full">
                        <DollarSign className="text-green-600" size={20} />
                    </div>
                    <p className="text-gray-700 text-[14px]">To‘lov</p>
                    <p className="ml-auto text-gray-700 font-medium text-[14px]">
                        {user?.payment ? `${user.payment} sum` : "To‘lov ma’lumoti yo‘q"}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                        <Video className="text-blue-600" size={20} />
                    </div>
                    <p className="text-gray-700 text-[14px]">Video kurslar soni</p>
                    <p className="ml-auto text-gray-700 font-medium text-[14px]">{user?.videos ?? 0}</p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-[6px]">
                    <div
                        className="bg-black h-[6px] rounded-full"
                        style={{ width: `${Math.min(100, Math.max(0, user?.progress ?? 0))}%` }}
                    ></div>
                </div>
            </div>

            <div className="footer p-4 pt-4 flex items-center gap-2 text-gray-500 text-[14px]">
                <Calendar size={16} />
                <p>Qo‘shilgan sana:</p>
                <p className="font-medium">{user?.joinDate || "Sana mavjud emas"}</p>
            </div>
        </div>
    );
};

StudentCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        ava_path: PropTypes.string,
        firstname: PropTypes.string,
        address: PropTypes.string,
        payment: PropTypes.number,
        videos: PropTypes.number,
        progress: PropTypes.number,
        joinDate: PropTypes.string,
    }),
};

export default StudentCard;