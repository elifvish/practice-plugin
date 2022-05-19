/**
 * Map block.
 * Displays Map with marker
 *
 * @package elifvish
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './Edit';
import Save from './Save';

export function mapBlock() {
registerBlockType( 'elifvish/map', {

	/**
      * Block title.
      *
      * @member {string}
      */
	title: __( 'Map', 'elifvish' ),

	/**
      * Block icons shown in editor.
      *
      * @member {string}
      */
	icon: 'location-alt',

	/**
      * Block Category
      *
      * @member {string}
      */
	category: 'embeds',

	/**
      * Describes the structure of the block in the context of the editor.
      *
      * @return {Object} Block elements.
      */
	edit: Edit,

	/**
      * Defines the way in which the different attributes should be combined
      * into the final markup for front-end but actual template will be returned using php.
      *
      * @return {null} Null.
      */
	save: Save
} );
}
