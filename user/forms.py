from django import forms  

from django.contrib.auth.models import User 
from .models import Profile

class LoginForm(forms.Form ) :
    email = forms.EmailField(label="Email",widget=forms.EmailInput )
    password = forms.CharField(label="Parola" ,widget=forms.PasswordInput)


class RegisterForm(forms.Form) :

    email = forms.EmailField(label="Email",widget=forms.EmailInput )
    username =forms.CharField( max_length=21,label="Kullanıcı adı")
    password = forms.CharField(max_length=20,label="Parola",widget=forms.PasswordInput)
    confirm = forms.CharField(max_length =20 ,label = "Parola Dogrula",widget =forms.PasswordInput )

    def clean(self):
        email =self.cleaned_data.get("email")
        username = self.cleaned_data.get("username")
        password =self.cleaned_data.get("password")
        confirm =self.cleaned_data.get("confirm")

        if (password and confirm    and   password != confirm ) :
            raise forms.ValidationError("Parolalar Eşleşmiyor ")

        values = {
            "username" :username ,
            "password": password,
            "email" : email ,
        }

        return values 

