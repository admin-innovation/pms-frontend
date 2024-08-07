import { goals } from "../data/temp";
import { IoMdAddCircle } from "react-icons/io";
import { Complaintss } from "../data/temp";
import ComplaintPopup from "../components/ComplaintPopup";
import { useState } from "react";

const Complaints = () => {
	const [complaintPopup, setComplainPopup] = useState(false);
	const complain = () => {
		setComplainPopup(!complaintPopup);
	};
	return (
		<div className='w-full h-screen relative -ml-4'>
			{complaintPopup ? <ComplaintPopup complain={complain} /> : ""}
			<div className=' mt-4 w-[full] h-[46px] bg-white rounded-tl-lg rounded-tr-lg shadow flex items-center text-zinc-500 text-[18px] font-bold relative'>
				<div className='   pl-[120px]  '>Title</div>
				<div className='  pl-[540px] '>To</div>
				<div className='  pl-[132px] '>Status</div>
			</div>

			<div className=''>
				{Complaintss.map((item, key) => {
					return (
						<TaskRow title={item.title} status={item.status} to={item.to} />
					);
				})}
			</div>

			<button onClick={complain} className='relative items-center w-full h-12 bg-white pl-[86%] flex  '>
				<div className='w-[146px] h-[37px]  bg-blue-500 rounded shadow justify-center items-center gap-2 flex'>
					<img className='w-[21px] h-[21px]' src='/src/assets/Subtract.svg' />
					<div className='text-xs font-bold text-center text-indigo-50 '>
						File a Complaint
					</div>
				</div>
			</button>
		</div>
	);
};

const TaskRow = ({ title, status, to }) => {
	return (
		<div className=' w-full flex flex-col gap-[10px] '>
			<div>
				<div className='w-[full] h-[60px] bg-white shadow flex border-b-[3px] border-b-[#656667]/10 items-center '>
					<div className=' w-[6%] pl-[24px]'>
						<img src='../src/assets/taskimg/Check.svg' alt='' />
					</div>
					<div className='w-[54%]  text-[20px] text-zinc-500  text-start'>
						{title}
					</div>
					<div className='w-[10%]  text-[20px] text-zinc-500  text-center'>
						{to}
					</div>
					<div className='w-[18%] relative'>
						<div
							className={` ml-[65px] w-[100px] h-[30px] rounded-[4px]  ${
								status === "Received"
									? "bg-[#74B72E] text-[#74B72E]"
									: status === "Pending"
									? "bg-[#F5BA45] text-[#F5BA45]"
									: ""
							}    bg-opacity-20   `}>
							<div className='relative w-full h-full text-center flex items-center justify-center'>
								{status}
							</div>
						</div>
					</div>
					<div className='ml-[28px]'>
						<button className='w-[71px] rounded border border-[#17417E] hover:bg-blue-300'>
							View
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Complaints;
