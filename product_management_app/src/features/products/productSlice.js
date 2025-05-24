import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ✅ URL của mockAPI (bạn cần thay bằng URL thật của bạn)
const BASE_URL = 'https://67ec9394aa794fb3222e224b.mockapi.io/products';

// ✅ Trạng thái ban đầu
const initialState = {
  products: [],
  loading: false,
  error: null,
};

// ✅ Thunk: lấy danh sách sản phẩm từ MockAPI
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  return await res.json();
});

// ✅ Thunk: thêm sản phẩm mới
export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return await res.json();
});

// ✅ Thunk: cập nhật sản phẩm
export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, data }) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
});
// 
// ✅ Thunk: xóa sản phẩm
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return id;
});

// ✅ Slice
const productSlice = createSlice({
  name: 'products',
  initialState,
//   reducers: {},
  extraReducers: (builder) => {
    builder
      // Get
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      // Update
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      // Delete
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
