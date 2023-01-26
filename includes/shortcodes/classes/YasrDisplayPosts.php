<?php

/**
 * @author Dario Curvino <@dudo>
 *
 * @since 3.2.1
 * YasrOrderPosts
 */
class YasrDisplayPosts extends YasrShortcode {

    public $orderby;
    public $sort;
    private $query_args;
    public function __construct($atts, $shortcode_name) {
        parent::__construct($atts, $shortcode_name);

        if ($atts !== false) {
            $atts = (shortcode_atts(
                array(
                    'orderby'       => 'vv_most',
                    'sort'          => 'DESC',
                ), $atts, $shortcode_name
            ));
        }

        //@todo validate orderby att
        if($atts['orderby']) {

        }

        if($atts['sort'] !== 'ASC') {
            $atts['sort'] = 'DESC';
        }

        $this->orderby = $atts['orderby'];
        $this->sort    = $atts['sort'];

        $this->queryOverall();
    }

    /**
     * @author Dario Curvino <@dudo>
     *
     * @since  3.2.1
     * @return void
     */
    public function queryOverall () {
        //default page
        $paged = 1;

        //if get_query_var('paged'), get the new page
        if (get_query_var('paged')) {
            $paged = (int)get_query_var('paged');
        }

        $this->query_args = array(
            'posts_per_page' => '10',
            'post_status'    => 'publish',
            'order'          => 'DESC',
            'orderby'        => 'meta_value',
            'meta_key'       => 'yasr_overall_rating',
            'paged'          => $paged,
        );
    }

    /**
     * Return the shortcode
     *
     * @author Dario Curvino <@dudo>
     *
     * @since  3.2.1
     * @return string
     */
    public function returnShortcode() {
        // The Query
        $the_query = new WP_Query($this->query_args);

        ob_start();

        // The Loop
        if ($the_query->have_posts() ) {
            while ($the_query->have_posts()) : $the_query->the_post();
                $this->content();
            endwhile;

            echo $this->pagination($the_query);

            /* Restore original Post Data */
            wp_reset_postdata();

            return ob_get_clean();
        } else {
            return esc_html__('No posts found', 'yet-another-stars-rating');
        }
    }

    /**
     * Return the shortcode template, using get_template_part provided by Gamajo Template Loader
     *
     * @author Dario Curvino <@dudo>
     *
     * @since 3.2.1
     *
     */
    public function content() {
        $templates = new YasrTemplateLoader();

        //this will search for templates in a directory called "yasr" first in the child theme; if nothing is found,
        // load yet-another-stars-rating/templates/content.php
        $templates->get_template_part('content');
    }

    /**
     * Return the pagination links
     * https://developer.wordpress.org/reference/functions/paginate_links/
     *
     * @author Dario Curvino <@dudo>
     *
     * @since 3.2.1
     *
     * @param $query
     *
     * @return string|string[]|null
     */
    public function pagination ($query) {
        $big = 999999999; // need an unlikely integer

        return paginate_links(
            array(
                'base'    => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                'format'  => '?paged=%#%',
                'current' => max(1, get_query_var('paged')),
                'total'   => $query->max_num_pages
            )
        );
    }
}