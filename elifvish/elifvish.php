<?php
/**Main plugin file
 *
 * @package movie-library
 */

/**
 * Plugin Name:       elifvish
 * Plugin URI:        elifvish
 * Description:       Plugin for practicing.
 * Version:           1.0.0
 * Author:            Vishal Kumar
 * Author URI:        elifvish.ml
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       movie-library
 */

define( 'ELIFVISH_INC_PATH', plugin_dir_path( __FILE__ ) );
define( 'ELIFVISH_URL', plugin_dir_url( __FILE__ ) );

/** Custom blocks */
require ELIFVISH_INC_PATH . 'blocks/elifvish-blocks.php';
