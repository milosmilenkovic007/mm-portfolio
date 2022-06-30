import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
		<FontAwesomeIcon icon="fab fa-linkedin-in" />
			</FooterLink>
			<FooterLink href="https://github.com/milosmilenkovic007">
			<FontAwesomeIcon icon="fa-brands fa-github" />
			</FooterLink>
	
		</Row>
       
	</Container>
    <div className='text-center text-dark p-3'>
        © 2022 Copyright <a className='text-dark' href='https://milos.live'> - Milos Milenkovic</a></div>
	</Box>
);
};
export default Footer;
