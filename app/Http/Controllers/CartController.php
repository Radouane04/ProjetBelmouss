<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\ProduitEnBois;
use App\Models\Bois;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $validator = validator($request->all(), [
            'product_id' => 'required|integer',
            'quantity' => 'required|integer|min:1',
            'user_id' => 'required|integer',
            'type' => 'required|string|in:produits_en_bois,bois',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = $request->only(['product_id', 'quantity', 'user_id', 'type']);
        $productOrWood = ($data['type'] === 'produits_en_bois') ? ProduitEnBois::find($data['product_id']) : Bois::find($data['product_id']);

        if (!$productOrWood) {
            return response()->json(['message' => 'Invalid product or wood ID'], 404);
        }

        $existingItem = Cart::where('product_id', $data['product_id'])
            ->where('user_id', $data['user_id'])
            ->where('type', $data['type'])
            ->first();

        if ($existingItem) {
            $existingItem->quantity += $data['quantity'];
            $existingItem->save();
        } else {
            $newItem = Cart::create($data);
        }

        return response()->json($newItem ?? $existingItem, 201);
    }

    public function showCart(Request $request)
    {
        $cartItems = Cart::with(['produitEnBois', 'bois'])->where('user_id', 1)->get();

        return response()->json(compact('cartItems'));
    }

    public function destroy(int $id)
    {
        $cartItem = Cart::findOrFail($id);
        $cartItem->delete();

        return response()->json(['message' => 'Item removed from cart successfully'], 200);
    }

    public function updateQuantity(Request $request, int $id)
    {
        $validator = validator($request->all(), [
            'quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $newQuantity = $request->get('quantity');
        $cartItem = Cart::findOrFail($id);
        $cartItem->quantity = $newQuantity;
        $cartItem->save();

        return response()->json(['message' => 'Cart item quantity updated successfully'], 200);
    }
}
