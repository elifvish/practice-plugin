<?php
/**
 * Delete data of movie library plugin upon install
 *
 * @package  movie-library
 */

/** Die if Uninstall constant not defined.*/
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	die;
}

/** Flag to verify whether to delete data or not .*/
$flag = get_option( 'movielib_settings_field' );


if ( 1 === (int) $flag['checkbox'] ) {

	$movielib_posts = array(
		'movie',
		'person',
	);

	$movielib_taxonomies = array(
		'movielib-genre-taxonomy',
		'movielib-labels-taxonomy',
		'movielib-career-taxonomy',
		'movielib-person-taxonomy',
		'movielib-production-company-taxonomy',
		'movielib-language-taxonomy',
		'movielib-tags-taxonomy',
	);

	/** Deletes all posts.*/
	foreach ( $movielib_posts as $types ) {
		movielib_delete_posts( $types );

	}

	/** Delete all terms. */
	foreach ( $movielib_taxonomies as $taxonomies ) {

		movielib_delete_taxonomy( $taxonomies );
	}
}
delete_option( 'movie_library_settings_field' );

/**
 * Function to delete all the posts
 *
 * @param <type> $post_type - name of post type.
 */
function movielib_delete_posts( $post_type ) {

	$args = array(
		'post_type'       => $post_type,
		'post_status'     => 'any',
		'fields'          => 'ids',
		'numberposts'     => 100,
		'supress_filters' => false,
	);

		$post_ids = get_posts( $args );

	do {

		foreach ( $post_ids as $id ) {
			wp_delete_object_term_relationships( $id, $movielib_taxonomies );
			wp_delete_post( $id, true );
		}
		$post_ids = get_posts( $args );

	} while ( ! empty( $post_ids ) );

}

/**
 * Function to delete all taxonomies.
 *
 * @param <type> $taxonomy - taxonomy name.
 */
function movielib_delete_taxonomy( $taxonomy ) {

	$term_ids = movielib_get_term_id( $taxonomy );

	foreach ( $term_ids as $id ) {
		wp_delete_term( $id, $taxonomy );
	}

}

/**
 *  Funtion to get term-ids.
 *
 * @param <type> $taxonomy - name taxonomy.
 */
function movielib_get_term_id( $taxonomy ) {

	$term_ids_list = array();

	$args = array(
		'taxonomy'   => $taxonomy,
		'hide_empty' => false,
		'fields'     => 'ids',
	);

	$custom_query = new WP_Term_Query( $args );
	$term_ids     = $custom_query->get_terms();

	return $term_ids;

}
