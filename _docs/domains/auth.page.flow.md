# Auth Flow

1 - PAGE: /sign-in
  : sign-in action

  1.1 - PAGE: dashboard => after success

  1.2 - PAGE: /resend-verify/required => after error: registrationIsRequired
    : warning for resend-verify requirement

    1.2.1 - PAGE: /resend-verify => after click action
      
    
----------------------------------------------------------------------

2 - PAGE: /sign-up
  : sign-up action

  2.1 - PAGE: /sign-up/success => after success
    : confirmation email sent, pls check

----------------------------------------------------------------------

3 - PAGE: /sign-up/verify => through email link
    : sign-up-verify action

  3.1 - PAGE: /sign-up/verify/success => after success
    : welcome, go to dashboard => click action

  3.2 - PAGE: /resend-verify => after failure + after click action
    : refer to [7]

----------------------------------------------------------------------

4 - PAGE: /sign-up/verify/with-pass => through email link
    : sign-up-verify-and-create-pass action

  4.1 - PAGE: /sign-up/verify/with-pass/success => after success
    : welcome, go to dashboard => click action

  4.2 - PAGE: /resend-verify => after failure + after click action
    : refer to [7]

----------------------------------------------------------------------

5 - PAGE: /reset-password/request
  : request reset password action : forget-password

  5.1 - PAGE: /reset-password/request/success => after success
    : email sent, reset password using link in the email
    : after a waiting time, resend code action will be activated

----------------------------------------------------------------------

6 - PAGE: /reset-password/complete => through email link
  : reset-password-after-request action

  6.1 - PAGE: /reset-password/complete/success => after success
    : go to sign-in

  6.2 - PAGE: /sign-in => click action

----------------------------------------------------------------------

7 - PAGE /resend-verify => through email link
