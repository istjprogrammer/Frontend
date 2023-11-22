import React, { useReducer, useState } from 'react';

const uid = () => { 
  let a = new Uint32Array(3)
  window.crypto.getRandomValues(a)
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map(A => A.toString(36))
      .join('')
  ).replace(/\./g, '')
}

const memberReducer = (state, action) => {
  switch(action.type){
    case 'add':
      return{
        ...state,
        member: [...state.member, {...action.info}],
        count: state.count+1
      };
    case 'delete':
      let filteredMember = state.member.filter((one)=>one.id !== action.idx)
      return{
        ...state,
        member:[...filteredMember],
        count: state.count-1
      };
    default:
      return state;
  }
}

const App = () => {

 const [state, dispatcher] = useReducer(memberReducer, {count: 0, member:[]});
 const [info, setInfo] = useState({});

  const clickMemberAdd = () => {
    dispatcher({type:'add', info:info})
  }

  const clickMemberDelete = (e) =>{
    dispatcher({type:'delete', idx:e.target.value})
  }

  const onChangeHandler = (e) =>{
    setInfo({...info, id:uid() ,[e.target.name]:[e.target.value]})
  }

  return (
    <div>
      <div>
        <h1>전체 회원 수 : {state.count}
        </h1>
        <div>
          <label>이름 : </label>
          <input
            type={'text'}
            name="name"
            autoComplete="off"
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>나이 : </label>
          <input
            type={'number'}
            name="age"
            autoComplete="off"
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>주소 : </label>
          <input
            type={'text'}
            name="address"
            autoComplete="off"
            onChange={onChangeHandler}
          ></input>
        </div>

        <button onClick={clickMemberAdd}>추가</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>지역</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.member.map((mem)=>(
          <tr>
            <td>{mem.name}</td>
            <td>{mem.age}</td>
            <td>{mem.address}</td>
            <td>
              <button onClick={clickMemberDelete} value={mem.id}>
                삭제
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App

// import React, { useReducer, useState } from 'react';

// const init = {
//   count: 0,
//   members: [{ name: '', age: '', address: '' }],
// };

// const memberReducer = (state, action) => {
//   switch (action.type) {
//     case 'add':
//       return {
//         count: state.count + 1,
//         members: [...state.members, { name: '', age: '', address: '' }],
//       };
//     case 'delete':
//       if (state.count > 0) {
//         return {
//           count: state.count - 1,
//           members: state.members.slice(0, -1),
//         };
//       }
//       return state;
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [memberState, memberDispatcher] = useReducer(memberReducer, init);

//   const clickMemberAdd = () => {
//     memberDispatcher({ type: 'add' });
//   };

//   const clickMemberDelete = () => {
//     memberDispatcher({ type: 'delete' });
//   };

//   return (
//     <div>
//       <div>
//         <h1>전체 회원 수: {memberState.count}</h1>
//         {memberState.members.map((member, index) => (
//           <div key={index}>
//             <label>이름: </label>
//             <input
//               type="text"
//               name="name"
//               autoComplete="off"
//               value={member.name}
//             ></input>
//             <label>나이: </label>
//             <input
//               type="number"
//               name="age"
//               autoComplete="off"
//               value={member.age}
//             ></input>
//             <label>주소: </label>
//             <input
//               type="text"
//               name="address"
//               autoComplete="off"
//               value={member.address}
//             ></input>
//           </div>
//         ))}
//         <button onClick={clickMemberAdd}>추가</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>이름</th>
//             <th>나이</th>
//             <th>주소</th>
//             <th>삭제</th>
//           </tr>
//         </thead>
//         <tbody>
//           {memberState.members.map((member, index) => (
//             <tr key={index}>
//               <td>{member.name}</td>
//               <td>{member.age}</td>
//               <td>{member.address}</td>
//               <td>
//                 <button onClick={clickMemberDelete}>❌</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;