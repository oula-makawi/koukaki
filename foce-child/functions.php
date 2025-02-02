<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
   
    wp_enqueue_style( 'custom-style', get_stylesheet_directory_uri() . '/custom_style.css' );
  



   wp_enqueue_style( 'swiper-style', get_stylesheet_directory_uri() . '/swiper-bundle.min.css' , array(), '11.1.3'); 
   wp_enqueue_script('custom_script', get_theme_file_uri('/custom-scripts.js'), array('jquery'),'1.0.0', true);
   wp_enqueue_script( 'swiper-element-bundle.min', get_theme_file_uri( '/swiper-bundle.min.js'), array(), '11.1.3', true );
}


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

