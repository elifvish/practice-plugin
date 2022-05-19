/**
 * External dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save();
	const { attributes } = props;

	let classCustomStyle = {};

	classCustomStyle.borderRadius = attributes.mapBorderRadius;
	classCustomStyle.width = attributes.width;
	classCustomStyle.height = attributes.height;

	if ( false !== attributes.center ) {
		classCustomStyle.margin = 'auto';
	}


	function render() {
		if ( false === attributes.apiKey ) {
			return <p>{ __( 'API key not found. Please configure Google Maps API key in Customizer settings', 'elifvish' ) }</p>;
		} else {
			return <div {...blockProps}><iframe title = { attributes.address } style = {classCustomStyle} loading="lazy"
				src={ 'https://www.google.com/maps/embed/v1/place?key=' + attributes.apiKey + '&q=' + encodeURIComponent( attributes.address ) + '&zoom=' + attributes.zoom }
				allowfullscreen>
			</iframe></div>;
		}
	}

	return (
		render()
	);
};

export default Save;
