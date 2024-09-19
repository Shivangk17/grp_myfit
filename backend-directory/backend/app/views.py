from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import razorpay
import json

razorpay_client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

class CreateOrderView(APIView):
    def post(self, request):
        amount = request.data.get('amount')
        currency = 'INR'
        
        # Create Razorpay Order
        razorpay_order = razorpay_client.order.create(dict(
            amount=int(float(amount) * 100),  # Razorpay amount is in paisa
            currency=currency,
            payment_capture='0'
        ))
        
        order_id = razorpay_order['id']
        
        return Response({
            'order_id': order_id,
            'amount': amount,
            'currency': currency,
            'key': settings.RAZORPAY_KEY_ID
        })

class VerifyPaymentView(APIView):
    def post(self, request):
        razorpay_payment_id = request.data.get('razorpay_payment_id')
        razorpay_order_id = request.data.get('razorpay_order_id')
        razorpay_signature = request.data.get('razorpay_signature')
        
        # Verify signature
        try:
            razorpay_client.utility.verify_payment_signature({
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            })
        except:
            return Response({'verified': False}, status=status.HTTP_400_BAD_REQUEST)
        
        # If we reach here, payment is successful
        # Update your database, send confirmation email, etc.
        
        return Response({'verified': True})