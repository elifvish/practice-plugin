/**
 * JavaScript file to control Gutenberg functionality
 * Serves as the entry point for all gutenberg-related scripts
 * Using ESNext/JSX
 */

// Imports.
const { registerBlockType } = wp.blocks; // Import WPBlocks for JS.
const { __, _x, _n, _nx, sprintf } = wp.i18n; // WordPress i18n.
const { InspectorControls } = wp.blockEditor; // WordPress Editor Library.
const { PanelBody } = wp.components; // WordPress Components.

// Gutenberg Block Registration Functions.
import { mapBlock } from './js/map/index.js';

mapBlock();
