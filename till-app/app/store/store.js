import { create } from 'zustand';
const useStore = create((set) => ({
 productList: [],
 code: '',
 setCode: (code)=> set (()=>({code:code})),
 paidAmount: (0).toFixed(2),
 setPaidAmount: (paidAmount)=> set (()=>({paidAmount:paidAmount}))
 }));
export default useStore;