<?php

/**
 * @author Dario Curvino <@dudo>
 * @since
 * @return
 */
class YasrProExportData {
    private $file_and_path;

    public $temp_dir_abs;

    public function init () {
        //Simply add the tabs on settings page
        add_action('yasr_add_stats_tab', array($this, 'exportTab'), 999);

        add_action('yasr_stats_tab_content', array($this, 'tabContent'));
    }

    /**
     * The new tab
     *
     * @author Dario Curvino <@dudo>
     *
     * @since 3.3.1
     *
     * @param $active_tab
     *
     * @return void
     */
    public function exportTab ($active_tab) {
        ?>
        <a href="?page=yasr_stats_page&tab=yasr_csv_export"
           class="nav-tab <?php if ($active_tab === 'yasr_csv_export') {
               echo 'nav-tab-active';
           } ?>">
            <?php esc_html_e('Export data', 'yet-another-stars-rating'); ?>
        </a>
        <?php
    }

    /**
     * Tab content
     *
     * @author Dario Curvino <@dudo>
     *
     * @since 3.3.1
     *
     * @param $active_tab
     *
     * @return void
     */
    public function tabContent($active_tab) {
        if ($active_tab === 'yasr_csv_export') {

            $array_csv = $this->checkIfPost();

            if($array_csv) {
                $this->createCSV($array_csv);
            }
            ?>

            <div>
                <?php
                    $this->drowTable();
                ?>
            </div>
            <?php
        } //End tab ur options
    }



    /**
     * Check if $_POST['yasr_csv_nonce'], and if so
     * call returnResults
     *
     * @return array|object|void|null
     */
    public function checkIfPost() {
        if(isset($_POST['yasr_csv_nonce'])) {
            $nonce = $_POST['yasr_csv_nonce'];

            if (!wp_verify_nonce( $nonce, 'yasr-export-csv' ) ) {
                wp_die(esc_html__('Error while checking nonce', 'yet-another-stars-rating'));
            }

            if (!current_user_can( 'manage_options' ) ) {
                wp_die(esc_html__( 'You do not have sufficient permissions to access this page.', 'yet-another-stars-rating' ));
            }

            if($_POST['yasr_export_visitor_multiset']) {
                $this->setFilePath('visitor_multiset');
                return $this->returnVisitorMultiData();
            }

        }
    }

    public function setFilePath($post_prefix) {
        //file name with date. e.g. format is 2020-Apr-25-10
        $file_name     = 'yasr_' . $post_prefix . '_' . date('Y-M-d__H:i:s') . '.csv';

        $this->temp_dir_abs  = WP_CONTENT_DIR;
        $this->file_and_path = $this->temp_dir_abs .'/'. $file_name;
    }



    /**
     * Create the csv file, if file already exists (must have same second)
     * delete it
     *
     * @param $array_csv
     */
    public function createCSV($array_csv) {
        if ($array_csv) {
            //IF file with same name already exists, delete it
            if (file_exists($this->file_and_path)) {
                unlink($this->file_and_path);
            }

            // Open file in append mode
            $opened_file = fopen($this->file_and_path, 'ab');

            $array_column_names = array(
                'TITLE',
                'SET NAME',
                'FIELD',
                'VOTE',
                'DATE',
                'SET ID'
            );

            fputcsv($opened_file, $array_column_names);

            foreach ($array_csv as $value) {
                fputcsv($opened_file, $value);
            }

            fclose($opened_file);
        }
    }

    /**
     * Drow form and table, set the nonce
     */
    public function drowTable () {
        ?>
        <h3>
            <?php _e('Export Multi Set', 'yet-another-stars-rating'); ?>
        </h3>

        <form action="<?php echo esc_url(admin_url('admin.php?page=yasr_stats_page&tab=yasr_csv_export')) ?>"
              method="post">
            <div class="yasr-container">
                <div class="yasr-box">ciao</div>
                <div class="yasr-box">ciao</div>
                <div class="yasr-box">
                    <?php $this->printExportBox('visitor_multiset'); ?>
                </div>

                <div class="yasr-box">ciao</div>
                <div class="yasr-box">ciao</div>
                <div class="yasr-box">ciao</div>
            </div>
        </form>

        <?php

    }

    /**
     * Create link to download the file
     *
     * @author Dario Curvino <@dudo>
     *
     * @param $post_prefix
     * @since  3.3.1
     * @return void
     */
    public function createLinks($post_prefix) {
        $this->setFilePath($post_prefix);

        $now = time();

        $directory_obj = new DirectoryIterator($this->temp_dir_abs);
        $output_array = array();

        $i=0;
        foreach($directory_obj as $file) {
            //check if is a file
            if ($file->isFile() && ($file->getExtension() === 'csv')) {
                //get file name
                $file_name = $file->getFilename();

                //if file name doesn't start with yasr_, go to next iteration
                if(substr($file_name, 0, 5) !== "yasr_") {
                    continue;
                }
                //if files are older than 1 day, delete
                if ($now - $file->getCTime() >= 60 * 60 * 24) {
                    unlink($this->file_and_path);
                }

                //save in an array url and file name
                $output_array[$i]['url']  = content_url() . '/' . $file_name;
                $output_array[$i]['name'] = $file_name;
                $i++;
            }
        }

        //sort array by name, most recent file first
        arsort($output_array);

        //echo the array
        foreach ($output_array as $output) {
            echo '<a href="'.esc_url($output['url']).'">'.esc_html($output['name']).'</a>';
            echo '<br />';
        }
    }

    /**
     * Print the box with button to export data
     *
     * @author Dario Curvino <@dudo>
     *
     * @since 3.3.1
     *
     * @param $name string what to export
     *
     * @return void
     */
    private function printExportBox ($name) {
        $nonce       = wp_create_nonce('yasr-export-csv');
        $id          = 'yasr-export-csv-' . $name;
        $name_hidden = 'yasr_export_'. $name
        ?>
        <div>
            <button class="button-primary" id="<?php echo esc_attr($id) ?>">
                <?php esc_html_e( 'Export CSV Multi Set', 'yet-another-stars-rating' );  ?>
            </button>
            <input type="hidden"
                   name="yasr_csv_nonce"
                   id="yasr-export-nonce"
                   value="<?php echo esc_attr($nonce) ?>">

            <input type="hidden"
                   name="<?php echo esc_attr($name_hidden) ?>"
                   value="<?php echo esc_attr($name) ?>">
        </div>
        <div class="yasr-indented-answer">
            <?php
                $this->createLinks($name);
            ?>
        </div>
        <?php
    }

    /**
     * Do the query to export visitor multiset and return results
     *
     * @return array|object|null
     */
    private function returnVisitorMultiData() {
        global $wpdb;

        //get logs
        $results = $wpdb->get_results(
            'SELECT posts.post_title as TITLE,
            multiset.set_name as "SET NAME",
            field.field_name as FIELD,
            log.vote as VOTE,
            log.date as DATE,
            log.set_type as "SET ID"
            FROM ' . $wpdb->posts .' as posts,
                ' . YASR_LOG_MULTI_SET . '  as log,
                ' . YASR_MULTI_SET_NAME_TABLE .'  as multiset,
                ' . YASR_MULTI_SET_FIELDS_TABLE . ' as field
            WHERE log.set_type = multiset.set_id
            AND   field.parent_set_id = log.set_type
            AND   log.field_id = field.field_id
            AND   posts.ID = log.post_id
            ORDER BY log.date DESC',
            ARRAY_A
        );

        return($results);
    }
}