import { FaLocationDot } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import Avatar from '../../public/avatar.png'


const categoryColorMap = {
	saving: "from-green-700 to-green-400",
	expense: "from-pink-800 to-pink-600",
	investment: "from-blue-700 to-blue-400",
	// Add more categories and corresponding color classes as needed
};

const Card = ({ cardType}) => {
    
    const cardClass = categoryColorMap[cardType]

	return (
		<div className={`rounded-md p-4 bg-gradient-to-br ${cardClass}`}>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-row items-center justify-between'>
					<h2 className='text-lg font-bold text-white'>{cardType}</h2>
					<div className='flex items-center gap-2'>
					
						
						<Link to={`/transaction/123`}>
							<HiPencilAlt className='cursor-pointer' size={20} />
						</Link>
					</div>
				</div>
				<p className='text-white flex items-center gap-1'>
					<BsCardText />
					Description: Salary
				</p>
				<p className='text-white flex items-center gap-1'>
					<MdOutlinePayments />
					Payment Type: Cash
				</p>
				<p className='text-white flex items-center gap-1'>
					<FaSackDollar />
					Amount: $56
				</p>
				<p className='text-white flex items-center gap-1'>
					<FaLocationDot />
					Location: New York
				</p>
				<div className='flex justify-between items-center'>
					<p className='text-xs text-black font-bold'>21 Sep 2007</p>
					<img src={Avatar} className='h-8 w-8 border rounded-full' alt='' />
				</div>
			</div>
		</div>
	);
};
export default Card;