<?php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('cf4', get_stylesheet_uri(), [], '1.0.0');
});
