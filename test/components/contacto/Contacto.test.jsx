import { render } from "@testing-library/react"
import { Contacto } from "../../../src/components/contacto/Contacto"

describe('first', () => { 

    test('should first', () => { 
         
        const title = "hola"
        render(<Contacto title={title}/>)
     })
 })