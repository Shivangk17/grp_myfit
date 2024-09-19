from django.urls import path
from .views import CreateOrderView, VerifyPaymentView

urlpatterns = [
    path('create-order/', CreateOrderView.as_view(), name='create_order'),
    path('verify-payment/', VerifyPaymentView.as_view(), name='verify_payment'),
]