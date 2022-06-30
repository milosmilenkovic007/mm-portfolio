import React from "react";
import {
Box,
Container,
Row,
FooterLink,

} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<FooterLink href="https://www.linkedin.com/in/milos-milenkovic-769a27157/">
		<img src="./linkedin.svg" alt='linkedin' style={{ borderRadius:'6px', padding:'10px', background:'white', width: '36px', margin: '10px', display:'inline' }}></img> 
			</FooterLink>
			<FooterLink href="https://github.com/milosmilenkovic007">
		<img src="./github.svg" alt='github' style={{ borderRadius:'6px', padding:'10px', background:'white', width: '36px', margin: '10px', display:'inline' }}></img> 
			</FooterLink>
	
		</Row>
       
	</Container>
    <div className='text-center text-dark p-3'>
        © 2022 Copyright <a className='text-dark' href='https://milos.live'> - Milos Milenkovic</a></div>
	</Box>
);
};
export default Footer;
