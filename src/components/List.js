import React, { useState } from "react"; // React Hooks
import "./List.css";

export default function List(props) {
	const [list, setList] = useState(props.users);

	const removeItem = (index) => {
		setList(list.filter((item) => item !== list[index]));
	};

	return (
		<>
			{list && (
				<ul className="list-group">
					{list.map((person, index) => {
						if(person.userId === props.id){
							return(
								<li className="list-group-item" key={index} >
									<div className="list-div">
										<button
											className="btn-primary"
											onClick={() => removeItem(index)}
										>
											My Cart
										</button>
									</div>
								</li>
							)
						}
					})}
				</ul>
			)}
		</>
	);
}