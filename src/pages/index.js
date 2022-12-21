import * as React from "react"
import Layout from "../componentes/layout"
import Seccion_1 from "../componentes/seccion_1"
import Seccion_2 from "../componentes/seccion_2"
import Seccion_3 from "../componentes/seccion_3"
import Seccion_4 from "../componentes/seccion_4"
import Seccion_5 from "../componentes/sectionContacto"




const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Seccion_1></Seccion_1>
        <Seccion_2></Seccion_2>
        <Seccion_3></Seccion_3>
        <Seccion_4></Seccion_4>
        <Seccion_5></Seccion_5>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
