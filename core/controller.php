<?php
class Controller{
public $dados;
    public function __construct()
    {
        $this->dados=array();
    }
    public function loadView($viewName,$viewData=array()){
        extract ($viewData);//serve para?
        include_once 'views/'.$viewName.'.php';//include para include_once e de php para html
    }


    public function loadTemplate($viewName,$viewData=array()){
        $this->dados=$viewData;
        require 'views/template.php';
    }

    public function loadViewInTemplate($viewName,$viewData=array()){
        extract($viewData);
        include_once 'views/'.$viewName.'.php';//include para include_once e de php para html


    }
}

?>