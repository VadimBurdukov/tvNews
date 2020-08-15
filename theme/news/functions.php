<?
    /*
     *
     * Loading BS.min.css files
     * 
     */
    function load_BS(){

        wp_enqueue_style('bs_style', get_template_directory_uri().'/style/bootstrap.min.css');
        wp_enqueue_style('bs_style', get_template_directory_uri().'/style/bootstrap-grid.min.css');
        wp_enqueue_style('bs_style', get_template_directory_uri().'/style/bootstrap-reboot.min.css');

    }
    add_action('wp_enqueue_scripts', 'load_bs');



    /*
     *
     * Loading custom.css file
     * 
     */
    function load_custom_style() {

        wp_enqueue_style('my_theme_style', get_template_directory_uri() . '/style/style.css');

    }
    add_action('wp_enqueue_scripts', 'load_custom_style');

    /*
     *
     * AJAX
     * 
     */
    add_action('wp_ajax_getId', 'getId');
    add_action('wp_ajax_nopriv_getId', 'getId');

    function getId()
    {
        $size = empty ($_GET['size']) ? '0' : ($_GET['size']); 
        $cur_id = empty ($_GET['cur']) ? '0' : ($_GET['cur']); 
        $arr = $_GET['arr'];
        $query_post_id = $arr[$cur_id];
        query_posts("p=$query_post_id");
        while (have_posts()): 
            the_post();  
            echo '<div class = "theContent">'; 
                the_content(); 
            echo'</div>';
        endwhile;
        wp_die();
    }

    add_action('wp_enqueue_scripts', 'my_assets');
    function my_assets() 
    {
        if (have_posts()) : 
            $size = 0; 
            while ( have_posts() ) : the_post(); 
                $arr[$size] =  get_the_ID(); 
                $size++; 
            endwhile; 
        endif; 
        wp_enqueue_script('ajax',get_template_directory_uri().'/js/ajax.js', array('jquery'));
    
        wp_localize_script('ajax', 'myAjax', array(  
            'ajaxurl' => admin_url('admin-ajax.php'),
            'arr' => $arr,
            'size' => $size,
            'cur'
        ));
    }

//Style for video block 
/*
    add_filter( 'embed_defaults', 'bigger_embed_size' );
         
	function bigger_embed_size()
	{
		return array( 'width' => 2220, 'height' => 880 );
	}*/
?>