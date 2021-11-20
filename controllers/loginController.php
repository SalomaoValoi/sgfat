<?php
 class loginController extends Controller {

    public function index(){
        $dados=array(
            "erro"=>array()
        );

        if(isset($_POST['nome']) && !empty($_POST['nome'])){
            $user=addslashes($_POST['nome']);
            $pass=addslashes($_POST['senha']);
            
            
           $usuario= new Usuario();
            if($usuario->doLogin($user,$pass)){
                header("location: ".url_root);
				exit;
            }else{
                $dados['erro']='Usuário ou Senha Incorretas!!';
            }
          
        }
      
       $this->loadTemplate('login',$dados);
    }
  
 }
?>