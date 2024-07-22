<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
        <video id="background-video" autoplay loop muted>
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/video-koukaki.mp4'; ?>" type="video/mp4">
            </video>
         <img id="parallax-image" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants"  class="logo-img-banner">
        </section>
        <section id="story" class="story">
            <h2 class ="story-title">L'histoire</h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>

            <!-- 'Characters' déplacé dans template-parts\characters-slider.php -->
        <?php
         
        get_template_part('template-parts/characters', 'slider');
        ?>

<article id="place">
    <div>
        <h3 class="place__title hidden">Le Lieu</h3>
        <p><?php echo esc_html(get_theme_mod('place')); ?></p>
    </div>
    <div class="row-nuages">
        <img 
            src="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'); ?>" 
            alt="grand nuage" 
            class="big-cloud">
        <img 
            src="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'); ?>" 
            alt="petit nuage" 
            class="little-cloud">
    </div>
</article>

        </section>


        <section id="studio" class="studio">
            <h2 class="studio__title hidden">Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>

         <section id="nomination" class="nomination">
            <div class="nomination__title">
                <img src="<?php echo esc_url(get_theme_file_uri('/assets/images/orange_place_bg.png')); ?>" alt="Fond du titre des nominations">
                <h3>Fleurs d’oranger & chats errants est nominé aux Oscars Short Film Animated de 2022 !</h3>
                </div>
             <img src="<?php echo esc_url(get_theme_file_uri('/assets/images/oscars.png')); ?>" alt="Logo Fleurs d'oranger & chats errants">
        </section>
                 
</section>        
    </main><!-- #main -->

<?php
get_footer();
?>