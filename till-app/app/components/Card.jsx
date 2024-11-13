import useStore from '../store/store';


const Card = (props) => {
  //Accedemos a la variable open para saber cuando mostrarlo
//Accedemos a las propiedades que queremos mostrar en el modal
const {productList, mensaje, remainingAmount, opened} = props


  //Accedemos a los estados que vamos a necesitar
  const [setProductList] = useStore((state) => [state.setProductList]);
  const [setPaidAmount] = useStore((state) => [state.setPaidAmount]);


  return (
          <div id='total'>
          <p>{productList ? `Total (${productList.length}) : ${remainingAmount}€` : ''}
          </p>
            <hr style={{width:"50%"}}></hr>
          <p> {mensaje}</p>
          </div>
  );



}
export default Card
