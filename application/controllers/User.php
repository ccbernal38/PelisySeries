<?php 
class User extends CI_Controller
{

public function __construct()
{
	parent::__construct();
	$this->load->model('user_model');
}

public function login()
{
	$username=$this->input->post('username');
	$password=md5($this->input->post('pass'));

	$result=$this->user_model->login($username,$password);
//	se debe modificar..if($result) $this->welcome();
//	else        $this->index();
}

public function registration()
{

		$this->user_model->add_user();
		
	
}
public function logout()
{
	$newdata = array(
		'user_id'   =>'',
		'user_name'  =>'',
		'user_email'     => '',
		'logged_in' => FALSE,
		);
	$this->session->unset_userdata($newdata );
	$this->session->sess_destroy();
	$this->index();
}
}



?>
