
import { StyleSheet, Text, View , FlatList} from 'react-native';

import Header from '../../components/Header'

import Balance from '../../components/Balance';

import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';


const list=[
  {
    id:1,
    label:'Boletos conta luz',
    value:'200,00',
    date:'11/12/2022',
    type:0 //despesas
  },
  {
    id:2,
    label:'Pix client x',
    value:'2.987,00',
    date:'11/12/2022',
    type:1 // Receíta entradas
  },
  {
    id:3,
    label:'Salário',
    value:'1.700,00',
    date:'15/08/2022',
    type:1 //Receíta / entrada
  },
]
export default function Home() {
  return (
    <View style={styles.container}>
    
      <Header name="Ricardo"/> 
      <Balance saldo="9.643,00" gastos="-527,00"/>
      <Actions/>
      <Text style={styles.title}>Útimas movimentaçãos</Text>
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item)=>String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Moviments data={item}/>}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    margin:14,

  },
  list:{
    marginStart:14,
    marginEnd:14,
  }
});