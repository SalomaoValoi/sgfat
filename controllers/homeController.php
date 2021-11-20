<?php
 class HomeController extends Controller {
    public function __construct(){
       $usuario = new Usuario();
        if(!$usuario->isLogged()){
            header("location: ".url_root."/login");
			exit;
        }
        $this->index();
    }

    public function index(){
     $this->loadTemplate('login');
    }
 }
?>
