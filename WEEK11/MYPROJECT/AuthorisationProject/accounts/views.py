from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import RegisterForm
from django.contrib.auth.decorators import login_required

def register_view(request):
    if request.user.is_authenticated:
        return redirect("dashboard")  # Already logged in

    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            messages.success(
                request,
                f"Account created for {username}! You can now log in."
            )
            return redirect("login")
    else:
        form = RegisterForm()

    return render(request, "accounts/register.html", {"form": form})

def dashboard_view(request):
    if not request.user.is_authenticated:
        return redirect("login")  # Not logged in, redirect to login page

    return render(request, "accounts/dashboard.html")

@login_required
def dashboard_view(request):
    return render(request, "accounts/dashboard.html", {
        "user": request.user
    })

