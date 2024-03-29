<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function purchase(Request $request)
    {

        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make(Str::random(12)),
                'name' => $request->input('first_name') . ' ' . $request->input('last_name'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'zip_code' => $request->input('zip_code')
            ]
        );

        try {
            //create new customer on stripe dashboard or if exists get him
            $user->createOrGetStripeCustomer();

            $payment = $user->charge(
                $request->input('amount'),
                $request->input('payment_method_id'),
                [

                    'return_url' => 'http://127.0.0.1:8000/summary', // Replace with your actual return URL
                ]
            ); //تفاصيل عملية الدفع

            $payment = $payment->asStripePaymentIntent(); // لتفعيل عملة الدفع والمفروض ترجع اوبجكت فيه تفاصيل عملية الدفع اللي تمت

            $confirmationOptions = [
                'return_url' => 'http://127.0.0.1:8000/summary', // Replace with your actual return URL
            ];

            // Confirm the PaymentIntent with additional options
            // $payment->confirm($confirmationOptions);
            $order = $user->orders()
                ->create([
                    'transaction_id' => $payment->id,
                    'total' => $payment->amount
                ]);

            foreach (json_decode($request->input('cart'), true) as $item) {
                $order->products()
                    ->attach($item['id'], ['quantity' => $item['quantity']]);
            }
            $order->load('products');
            return $order;
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
