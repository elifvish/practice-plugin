/**
 * External dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl, ToggleControl} from '@wordpress/components';

const Edit = ( props ) => {
	let {
		attributes,
		setAttributes
	} = props;

	const blockProps = useBlockProps();

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

	return [
		<InspectorControls>
			<PanelBody>
				<TextControl
					label={ __( 'Address', 'elifvish' ) }
					value={ attributes.address }
					onChange={ address => setAttributes( { address } ) }
				/>
			</PanelBody>

			<PanelBody>
				<RangeControl
					beforeIcon="arrow-left-alt2"
					afterIcon="arrow-right-alt2"
					label={ __( 'Zoom', 'elifvish' ) }
					value={ attributes.zoom }
					onChange={ zoom => setAttributes( { zoom } ) }
					min={ 1 }
					max={ 21 }
				/>
			</PanelBody>

			<PanelBody>
				<RangeControl
					beforeIcon="arrow-left-alt2"
					afterIcon="arrow-right-alt2"
					label={ __( 'Height', 'elifvish' ) }
					value={ attributes.height }
					onChange={ height => setAttributes( { height } ) }
					min={ 50 }
					max={ 1000 }
				/>
			</PanelBody>

			<PanelBody>
				<RangeControl
					beforeIcon="arrow-left-alt2"
					afterIcon="arrow-right-alt2"
					label={ __( 'Width', 'elifvish' ) }
					value={ attributes.width }
					onChange={ width => setAttributes( { width } ) }
					min={ 50 }
					max={ 1000 }
				/>
			</PanelBody>

			<PanelBody>
				<RangeControl
					beforeIcon="arrow-left-alt2"
					afterIcon="arrow-right-alt2"
					label={ __( 'Border Radius', 'elifvish' ) }
					value={ attributes.mapBorderRadius }
					onChange={ mapBorderRadius => setAttributes( { mapBorderRadius } ) }
					min={ 0 }
					max={ 100}
				/>
			</PanelBody>

			<PanelBody>
				<ToggleControl
					label = { __( 'Align Center', 'elifvish' )}
					help={attributes.center ? true : false}
					checked={attributes.center}
					onChange={center => setAttributes( { center } ) }
				/>
			</PanelBody>
		</InspectorControls>,
		render()
	];
};

export default Edit;


