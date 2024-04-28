/** @format */

import React from "react";
import { ContainerComponent } from "../components";
import { useGetBlogQuery } from "../service/endpoints/BlogEndpints";

const HomePage = () => {
	const { data } = useGetBlogQuery();
	console.log(data);

	return (
		<div className=" w-full ">
			<ContainerComponent>
				<h1 className="   my-10 tracking-[7px] border-b-white border-b w-[20%] pb-3  m-auto   text-xl text-white  text-center ">
					INDEX OPTION
				</h1>

				<div className="w-full flex  flex-wrap  items-center gap-10 ">
					{data?.map((item) => (
						<div className=" group  hover:border-b-white hover:border-b duration-1000 ">
							<img
								className=" w-full object-cover opacity-85 hover:opacity-100 duration-700 transition-transform "
								src={item?.image}
								alt=""
							/>
							<p className=" text-gray-300  duration-1000 group-hover:text-white  text-center font-serif  tracking-widest my-3 ">
								{item?.name}
							</p>
						</div>
					))}
				</div>
			</ContainerComponent>
		</div>
	);
};

export default HomePage;
