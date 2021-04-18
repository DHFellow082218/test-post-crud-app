<?php namespace App\Repositories;

interface PostRepositoryInterface{

	public function all();
	public function findById($id);
    public function findBySlug($slug);
    public function update($id);
    public function delete($id);

	// more
}
