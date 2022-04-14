import React from 'react';
import Layout from '../../components/Layout';

export function getStaticProps(){
  return {
    props: {
      numero: Math.random()
    }
  }
}

const Estatico = (props) => {
  return ( 
    <Layout>
      <div style={{
        color: "white"
      }}>{props.numero}</div>
    </Layout>
   );
}
 
export default Estatico;