<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function emailVerify(Request $request)
    {
        $users_email = $request->only('email');

        $user_data = User::whereIn('email', $users_email)->first();

        $user_data['email_verified_at'] = Carbon::now();

        if ($user_data['email_verified_at']) {

            $user_data['verification_token'] = null;

            $user_data->save();
        }

        return response()->json($user_data);


    }

    public function store(CreateUserRequest $request)
    {
        $ver_token = Str::random(128);

        $data = $request->validated();

        $data['verification_token'] = $ver_token;

        $data['user_role'] = 'default_user';

        $data['is_active'] = 0;

        $user = User::create($data);

        if ($user) {

            $this->emailVerification($user, $ver_token);

            return response()->json(['message' => 'You Successfully Registered, Please Verify Your Account :)']);

        }
        return response()->json(['error' => 'wrong details']);
    }

    public function show() {

        $data = User::all();

        return response()->json(['users' => $data]);

    }

    public function edit(CreateUserRequest $request) {

        $user_update = $request->validated();

        Auth::user()->update($user_update);

        return response()->json(['data' => $user_update]);

    }


    public function destroy() {

         if (Auth::user()) {
             return Auth::user()->delete();
         }

         return response()->json(['data' => 'chka tenc ban vor jnjem aziz']);

    }

    public function emailVerification(User $user, $token)
    {
        Mail::send('mail.verify', ['user' => $user, 'token' => $token], function ($m) use ($user) {
            $m->to($user->email, $user->name)->subject('Please Verify your Email');
        });
    }

}
