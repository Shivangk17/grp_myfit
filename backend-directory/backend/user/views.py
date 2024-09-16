from .models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate
import json


@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        is_premium_user = data.get('isPremiumUser', False)

        if not username or not email or not password:
            return JsonResponse({'status': 'error', 'message': 'Missing required fields'}, status=400)

        try:
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password,
                isPremiumUser=is_premium_user,
                is_superuser=False,  # Explicitly set is_superuser
                is_staff=False       # Explicitly set is_staff
            )
            login(request, user)
            return JsonResponse({'status': 'success', 'message': 'User created successfully'})
        except Exception as e:
            return JsonResponse({'status': str(e), 'message': str(e)}, status=400)
    
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        data=User.objects.get(username=username)

        print(data.email)
        if not username or not password:
            return JsonResponse({'status': 'error', 'message': 'Missing required fields'}, status=400)

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'success', 'username':str(username) ,'email':str(data.email) , 'ispremiumuser':str(data.isPremiumUser)})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=401)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)