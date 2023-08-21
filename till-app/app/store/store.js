import { create } from 'zustand';
const useStore = create((set) => ({
 productList: [],
 code: '',
 setCode: (code)=> set (()=>({code:code}))
 }));
export default useStore;