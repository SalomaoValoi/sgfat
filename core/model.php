<?php
 class Model {
     protected $db;
     protected $conexao;

     public function __construct(){
       
     }
     public function iniciarConexao(){
        global $config;

        try{
            $this->conexao="mysql:dbname=".$config['dbname'].";host=".$config['host'];
            $this->db = new PDO($this->conexao,$config['dbuser'],$config['dbpass']);
            return $this->db;
        }catch(PDOException $exc){
            echo "erro ".$exc->getMessage();
        }


     }
 }


?>