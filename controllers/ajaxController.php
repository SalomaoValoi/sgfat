<?php
 class ajaxController extends Controller {

    public function __construct(){
        $usuario = new Usuario();
        if(!$usuario->isLogged()){
            header("location: ".$url_root."/login");
			exit;
        }
    }

 }
?>