<?php




class Usuario extends Model{

    private function readUser($nome, $senha){
        $sql="select * from usuario where nome =:nome and senha=:senha";
        $stm=$this->iniciarConexao()->prepare($sql);
        $stm->bindValue(":nome",$nome);
        $stm->bindValue(":senha",$senha);
        $stm->execute();
        return $stm;

    }

    // este metodo verifica se o usuario esta logado no sistema ou nao
    // se as variavies de sessao estiverem vazios, o usuario nao esta logado
    public function isLogged(){
        if( isset($_SESSION['Usersession']) && !empty($_SESSION['Usersession']) 
        && isset($_SESSION['email']) && !empty($_SESSION['email'])){
            return true;
        }else{
            return false;
        }
    }

    public function doLogin($user,$pass){
        $data=readUser($user,$pass);
        if($data->rowCount()>0){
            $row=$sql->fetch();
            $_SESSION['Usersession']=$row['id'];
            $_SESSION['email']=$row['email'];
            return true;
        }else{
            return false;
        }
    }
    
    public function dologout(){
        session_start();
        session_destroy();
    }
}