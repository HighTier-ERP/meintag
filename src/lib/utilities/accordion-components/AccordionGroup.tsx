
//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Component that allows for group list information
// like accordion lists. Highly customizable with props for text and position.
// Uses atomic css, utility, and css props for theme handling.
/*----------------------------------------------------------------------------*/

const AccordionGroup = ({
	children,
	title,
	subTitle
}: any) => {
	return (
		<div className="accordion-group">
			<div className="flex flex-column">
				<span className='f-s-1_5rem l-h-1_2em'>{title}</span>
				<span className='f-s-1rem text-gray-6'>{subTitle}</span>
			</div>
			<br/>
            {children}
        </div>
	);
};

export default AccordionGroup;