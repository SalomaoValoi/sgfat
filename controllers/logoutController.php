<?php
 class logoutController extends Controller {

    public function __construct(){
        $usuario = new Usuario();
        if(!$usuario->isLogged()){
            header("location: ".url_root."/login");
            exit;
        }
        
    }

    public function index(){
        $usuario= new Usuario();
        $usuario->dologout();
        header("location: ".url_root);
    }

 }
?>