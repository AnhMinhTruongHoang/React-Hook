// import React, { useState, useEffect, useContext, useReducer, useRef } from 'react';

// // useState example

// // useState: Dùng để khai báo và quản lý state trong function component. Trả về một mảng gồm giá trị state hiện tại và hàm để cập nhật nó.

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// // useEffect example

// // useEffect: Cho phép thực hiện các tác vụ phụ (side effects) như gọi API, cập nhật DOM. Hàm này chạy sau khi render và có thể cấu hình để chỉ chạy khi các giá trị cụ thể thay đổi.
// function Example() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// // useContext example
// // useContext: Giúp truy xuất giá trị context hiện tại trong function component. Thường được dùng để tránh phải truyền props xuống nhiều tầng component.

// const ThemeContext = React.createContext('light');

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return <button className={theme}>I am styled by theme context!</button>;
// }

// // useReducer example
// // useReducer: Thay thế cho useState khi logic cập nhật state phức tạp, hoặc khi state phụ thuộc vào nhau. Thường được dùng trong các ứng dụng phức tạp hơn.
// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function CounterWithReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//     </div>
//   );
// }

// // useRef example
// // useRef: Trả về một đối tượng ref có thể giữ giá trị giữa các lần render mà không gây re-render. Thường dùng để truy xuất DOM hoặc lưu trữ giá trị bất biến.
// function TextInputWithFocusButton() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     inputEl.current.focus();
//   };
//   return (
//     <div>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </div>
//   );
// }
