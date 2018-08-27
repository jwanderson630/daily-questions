import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
	height: 70px;
	display: flex;
	margin: 0 auto;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;
	color: white;
	align-content: flex-end;
	flex-wrap: wrap;
	background-color: #3498db;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
`;

const NavProfile = styled.div`
	border-radius: 50%;
	overflow: hidden;
	height: 40px;
	width: 40px;
	box-shadow: 0 0 0 2px #fff, 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
	img {
		width: 100%;
	}
`;

const NavLogo = styled.div`
	font-size: 18px;
	font-weight: 300;
`;

const navbar = () => {
	return (
		<Navbar>
			<NavLogo>
				<strong>Daily</strong>Questions
			</NavLogo>
			<NavProfile>
				<img
					src="https://via.placeholder.com/50x50"
					alt="profile pic"
				/>
			</NavProfile>
		</Navbar>
	);
};

export default navbar;
