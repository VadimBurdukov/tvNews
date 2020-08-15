<?php
/**
 * Plugin Name: Test Plugin
 * Author: John Doe
 * Version: 1.0.0
 */
 
function loadTimerBlock() {
  wp_enqueue_script(
    'timer-block',
    plugin_dir_url(__FILE__) . 'timer.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
  
add_action('enqueue_block_editor_assets', 'loadTimerBlock');