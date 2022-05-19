<?php
/**
 * Cusotm blocks
 *
 * @package movie-library
 */

/**
 * Enque block scripts
 */
function enqueue_block_scripts() {

	wp_enqueue_script(
		'elifvish-blocks',
		ELIFVISH_URL . '/build/js/blocks.js',
		array(),
		array(),
		true
	);

}

/**
 * Register scripts.
 */
function register_map_block() {

	$map_api = '';

	register_block_type(
		'elifvish/map',
		array(
			'editor_script' => 'elifvish-blocks',
			'attributes'    => array(
				'apiKey'          => array(
					'type'    => 'string',
					'default' => $map_api,
				),
				'address'         => array(
					'type'    => 'string',
					'default' => 'New Delhi, India', // Used to render Map when intialized for the first time.
				),
				'height'          => array(
					'type'    => 'number',
					'default' => 203,
				),
				'width'           => array(
					'type'    => 'number',
					'default' => 399,
				),
				'zoom'            => array(
					'type'    => 'number',
					'default' => 4,
				),
				'mapBorderRadius' => array(
					'type'    => 'number',
					'default' => 20,
				),
				'center'          => array(
					'type'    => 'boolean',
					'default' => true,
				),
			),
		)
	);
}

add_action( 'init', 'register_map_block' );
add_action( 'init', 'enqueue_block_scripts' );
