@component('mail::message')
# Greetings!
<p>
    You are receiving this email because you have requested a password reset on our system. If so, please click the button containing the password reset link 
    below and fill up the form to set up your new password, otherwise ignore this message.   
</p>

@component('mail::button', ['url' => $url])
Reset Password Link
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
