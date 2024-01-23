<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        // return Product::all(); مش راح تنفع لانها مش راح تجيب بيانات الكاتيجوري

        return Product::with('categories:id,name')->get(); // كل منتج راح يرجع مع الكاتيجوري الخاصة فيه وبحدد اسماء الاعمدة اللي بدي اياها
    }
}
