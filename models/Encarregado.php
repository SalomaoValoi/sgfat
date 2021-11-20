<?php
class Encarregado extends model{

    //
    public function isLogged(){
        if( isset($_SESSION['Usersession']) && !empty($_SESSION['Usersession']) 
        && isset($_SESSION['email']) && !empty($_SESSION['email'])){
            return true;
        }else{
            return false;
        }
    }

    public function doLogin ($email,$palavra_passe){
        $sql=$this->db->prepare("SELECT * FROM utilizador WHERE email=:email AND palavra_passe=:palavra_passe");
        $sql->bindValue(":email",$email);
        $sql->bindValue(":palavra_passe",md5($palavra_passe));
        $sql->execute();

        if($sql->rowCount()>0){
            $row=$sql->fetch();
            $_SESSION['Usersession']=$row['idutilizador'];
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
