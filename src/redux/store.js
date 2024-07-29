import { createStore, applyMiddleware } from "redux";
// Nhập hàm applyMiddleware từ thư viện Redux để sử dụng middleware trong store.

import thunk from "redux-thunk";
// Nhập middleware redux-thunk để xử lý các hành động bất đồng bộ (asynchronous actions) trong Redux.

import rootReducer from "./reducer/rootReducer";
// Nhập rootReducer từ tệp tin rootReducer. Đây là reducer chính kết hợp tất cả các reducer con.

import { composeWithDevTools } from "redux-devtools-extension";
// Nhập hàm composeWithDevTools để sử dụng công cụ Redux DevTools Extension giúp theo dõi và debug state của Redux.

import { persistStore, persistReducer } from "redux-persist";
// Nhập các hàm persistStore và persistReducer từ thư viện redux-persist để cấu hình lưu trữ state vào local storage.

import storage from "redux-persist/lib/storage";
// Nhập storage từ thư viện redux-persist. Mặc định sử dụng localStorage cho web để lưu trữ state.

const persistConfig = {
  key: "root",
  storage,
};
// Cấu hình cho redux-persist, bao gồm key là "root" và sử dụng localStorage để lưu trữ.

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Kết hợp reducer chính với cấu hình persist để tạo ra persistedReducer, một reducer có khả năng lưu trữ state.

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// Tạo store của Redux với persistedReducer, kết hợp với middleware thunk và công cụ DevTools.

let persistor = persistStore(store);
// Tạo một đối tượng persistor để điều khiển quá trình lưu trữ và khôi phục state.

export { store, persistor };
// Xuất ra store và persistor để sử dụng trong ứng dụng.
