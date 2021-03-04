import React from "react";

const Pagination = ({ prevUrl, nextUrl, gotoPrevUrl, gotoNextUrl }) => {
	return (
		<div className="text-center mt-3" aria-label="...">
			<ul className="pagination justify-content-center">
				<li className={prevUrl ? "page-item pointer" : "page-item disabled"} onClick={prevUrl ? gotoPrevUrl : null}>
					<button className="page-link">
						Previous
					</button>
				</li>
				<li className={nextUrl ? "page-item pointer" : "page-item disabled"} onClick={nextUrl ? gotoNextUrl : null}>
					<button className="page-link">
						Next
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
