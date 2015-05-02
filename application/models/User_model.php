<?php 

class User_model extends CI_Model {


	public function __construct()
	{
		parent::__construct();
	}


	function login($username,$pass)
	{
		$this->db->where("username",$username);
		$this->db->where("pass",$pass);

		$query=$this->db->get("users");

		if($query->num_rows()>0)
		{
			foreach($query->result() as $rows)
			{
    //add all data to session
				$newdata = array(
					'user_id'  => $rows->idUser,
					'user_name'  => $rows->username,
					'user_email'    => $rows->email,
					'logged_in'  => TRUE,
					);
			}
			$this->session->set_userdata($newdata);
			return true;
		}
		return false;
	}
	public function add_user()
	{
		$data=array(
			'name'=>$this->input->post('name'),
			'lastname'=>$this->input->post('lastname'),
			'username'=>$this->input->post('username'),
			'email'=>$this->input->post('email'),
			'pass'=>md5($this->input->post('pwd'))
			);
		$this->db->insert('users',$data);
	}
}





?>