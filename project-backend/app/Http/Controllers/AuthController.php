<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{

    public function login(Request $request)
    {

        $credentials = $request->only('email', 'password');

        if ($token = auth()->attempt($credentials)) {

            $verify_user_email = $credentials['email'];

            $user_data = Auth::user()->where('email', $verify_user_email)->first();

            $verify = $user_data['email_verified_at'];

            if ($verify) {

                return $this->respondWithToken($token);
            }

            return response()->json(['message' => 'Please Verify Your Account'], 422);

        }

        return response()->json(['message' => 'wrong details'], 422);
    }

    public function me()
    {
        return response()->json($this->guard()->user());
    }

    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60
        ]);
    }


    public function guard()
    {
        return Auth::guard();
    }
}
