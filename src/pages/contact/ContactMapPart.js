import React from 'react';

const ContactMapPart = () => {
	return (
		<div className='contact-info h-100'>
			<iframe
				className='w-100 h-100'
				title='map'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.4709448583726!2d26.63504835099455!3d38.31492377956493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb905dc83c60ab%3A0x44ebb36b81795056!2sWeptile!5e0!3m2!1str!2str!4v1661769437063!5m2!1str!2str'
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			/>
		</div>
	);
};

export default ContactMapPart;
